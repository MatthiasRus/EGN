import sys
import socket
import time
from pathlib import Path

# YOLOv5 import
FILE = Path(__file__).resolve()
ROOT = FILE.parent
sys.path.append(str(ROOT))

from detect import run  

PI_IP = "192.168.246.200"
PI_PORT = 5050

def setup_socket():
    while True:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect((PI_IP, PI_PORT))
            return s
        except Exception as e:
            print("[!] Retry connection in 2s:", e)
            time.sleep(2)


def main_loop():
    sock = setup_socket()
    last_detected = time.time()
    DETECTION_TIMEOUT = 60 

    try:
        while True:
            results = run(
                source="udp://192.168.246.10:5000",
                weights="auto_backups/results_1/weights/last.pt",
                conf_thres=0.25,
                save_txt=False,
                save_conf=False,
                nosave=True
            )

            if results:
                best_x = sorted(results, key=lambda x: abs(x - 320))[0]
                msg = f"{best_x}"
                print(f"[PC] Sending: {msg}")  

                print(f"[>] Sending: {msg}")
                sock.sendall((msg + "\n").encode())
                last_detected = time.time()
            else:
                if time.time() - last_detected > DETECTION_TIMEOUT:
                    print("[>] No object. Sending STOP.")
                    sock.sendall(b"b\n")
                    last_detected = time.time()

            time.sleep(0.2)

    except KeyboardInterrupt:
        print("Exiting.")
        sock.sendall(b"b\n")
        sock.close()


if __name__ == "__main__":
    

    main_loop()
