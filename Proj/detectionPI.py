import socket
import serial
import time
import subprocess
import threading
SERIAL_PORT = "/dev/ttyACM0"
BAUD_RATE = 9600

try:
    arduino = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)
    print("[*] Connected to Arduino via Serial")
    arduino.write(b"AUTO\n")  
    arduino.write(b"320\n")
    time.sleep(0.5)
    arduino.write(b"a\n")  

except serial.SerialException as e:
    print(f"[!] Could not connect to Arduino: {e}")
    exit(1)

stream_command = [
    "libcamera-vid", "-t", "0", "--inline", "--width", "640", "--height", "480",
    "-o", "-", "|", "ffmpeg", "-re", "-i", "-", "-vcodec", "copy", "-f", "mpegts",
    "udp://192.168.246.10:5000"
]
stream_process = subprocess.Popen(" ".join(stream_command), shell=True)
print("Video stream started.")
HOST = "0.0.0.0"
PORT = 5050

def send_heartbeat():
    while True:
        try:
            arduino.write(b'ALIVE\n')
            time.sleep(1)
        except Exception as e:
            print("Lost connection to Arduino:", e)
            break

heartbeat_thread = threading.Thread(target=send_heartbeat, daemon=True)
heartbeat_thread.start()

last_detection_time = time.time()
DETECTION_TIMEOUT = 2
last_sent_stop = False

def is_centered(x):
    return 310 < x < 330

def start_server():
    global last_detection_time, last_sent_stop
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen(1)
        print(f"[*] Server listening on {HOST}:{PORT}")
        conn, addr = s.accept()

        with conn:
            print(f"[+] Connected by {addr}")
            while True:
                try:
                    data = conn.recv(1024)
                    if not data:
                        print("[!] Client disconnected.")
                        break

                    decoded = data.decode().strip()
                    print(f"[>] Received: {decoded}")

                    
                    last_detection_time = time.time()
                    try:
                            x_val = float(decoded)
                            x_val = int(round(x_val))

                            arduino.write(f"{x_val}\n".encode())

                            if is_centered(x_val):
                                arduino.write(b"a\n")
                    except ValueError:
                            print("[!] Invalid TRACK value")

                    if decoded in ["AUTO", "MANUAL"]:
                        print(f"[MODE] {decoded}")
                        arduino.write((decoded + "\n").encode())

                    if time.time() - last_detection_time > DETECTION_TIMEOUT:
                        if not last_sent_stop:

                            arduino.write(b"b\n")  # Emergency stop
                            print("[!] No recent detection. Sent STOP.")
                            last_sent_stop = True
                        else: 
                            last_sent_stop = False

                    conn.send(f"[Pi] Command received: {decoded}\n".encode())

                except Exception as e:
                    print(f"[!] Error: {e}")
                    break

if __name__ == "__main__":
    try:
        start_server()
    
    except KeyboardInterrupt:
        print("Exiting. Telling Arduino to stop.")
        arduino.write(b'b\n')  # Emergency stop
        stream_process.terminate()
        arduino.close()
    