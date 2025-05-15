#include <SoftwareSerial.h>

SoftwareSerial masterSerial(10, 11); // RX, TX

const byte TRIG_PINS[] = {4, 6, 8};
const byte ECHO_PINS[] = {5, 7, 9};
const unsigned long TIMEOUT = 30000UL; // 5m max distance

void setup() {
  masterSerial.begin(9600);
  for(int i=0; i<3; i++) {
    pinMode(TRIG_PINS[i], OUTPUT);
    pinMode(ECHO_PINS[i], INPUT);
  }
}

void loop() {
  String data;
  for(int i=0; i<3; i++) {
    data += "D";
    data += i+1;
    data += ":";
    data += getDistance(TRIG_PINS[i], ECHO_PINS[i]);
    if(i<2) data += ",";
  }
  masterSerial.println(data);
  delay(50); // Reduced delay for faster updates
}

long getDistance(byte trig, byte echo) {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  
  long duration = pulseIn(echo, HIGH, TIMEOUT);
  return (duration <= 0) ? -1 : duration * 0.034 / 2;
}

