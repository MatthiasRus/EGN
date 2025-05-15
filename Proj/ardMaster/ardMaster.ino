#include <Servo.h>

SoftwareSerial bluetooth(2, 3); 

// ESC control
const int ESC_LEFT_PIN = 9;
const int ESC_RIGHT_PIN = 10;
Servo escLeft, escRight;

// Conveyor motor control
const int ENB = 6;
const int IN1 = 5;
const int IN2 = 7;
const int MIN_CONVEYOR_SPEED = 160;
bool conveyorOn = false;

// State flags
bool escsArmed = false;

bool bluetoothEnabled = true;
int currentLeftSpeed = 1000;
int currentRightSpeed = 1000;

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);
  initializeESCs();
  pinMode(ENB, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  stopConveyor();
  delay(1000);
}

void loop() {
  handleBluetooth();
}

void handleBluetooth() {
  if (bluetooth.available()) {
    String cmd = bluetooth.readStringUntil('\n');
    cmd.trim();

      if (cmd == "a") {
        rearmESCs();
        delay(2000);
        setMotorSpeed(1300, 1300);
      }
      else if (cmd == "b") {
        setMotorSpeed(1000, 1000);
        stopConveyor();
      }
      else if (cmd == "ca") {
        startConveyor();
      }
      else if (cmd == "cb") {
        stopConveyor();
      }
      else if (cmd == "l") {
        setMotorSpeed(1000, 1300);  // turn left
      }
      else if (cmd == "r") {
        setMotorSpeed(1300, 1000);  // turn right
      }
      else if (cmd == "s") {
        setMotorSpeed(1300, 1300);
      }
      else if(cmd == "e"){
        emergencyStop();
      }
    
  }
}


void emergencyStop() {
  setMotorSpeed(1000,1000);
  stopConveyor();
}

void initializeESCs() {
    escLeft.attach(ESC_LEFT_PIN);
    escRight.attach(ESC_RIGHT_PIN);

    escLeft.writeMicroseconds(1000);
    escRight.writeMicroseconds(1000);
    delay(5000); 
    
    escLeft.writeMicroseconds(1300);
    escRight.writeMicroseconds(1300);
    delay(2000);  
    escsArmed = true;
  
}


void rearmESCs() {
  escLeft.detach();
  escRight.detach();
  delay(100);
  initializeESCs();
}

void stopConveyor() {
  analogWrite(ENB, 0);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  conveyorOn = false;
}

void startConveyor() {
  conveyorOn = true;
  digitalWrite(IN1, LOW);    // direction preserved from original
  digitalWrite(IN2, HIGH);
  analogWrite(ENB, MIN_CONVEYOR_SPEED);
}


void setMotorSpeed(int left, int right) {
  if (!escsArmed) rearmESCs();
  currentLeftSpeed = left;
  currentRightSpeed = right;
  escLeft.writeMicroseconds(currentLeftSpeed);
  escRight.writeMicroseconds(currentRightSpeed);
}


