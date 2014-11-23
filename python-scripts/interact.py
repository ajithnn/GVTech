import serial
import requests

#ser = serial.Serial('/dev/ttyUSB0')

def checkCommandExists():
    r = requests.get("http://192.168.0.103:3000/")
    curValue = r.text
    if curValue == "none":
	return None
    else:
	return curValue

def getSerialCommand(cmd):
    if "coffee" in cmd and "on" in cmd:
	return "a"
    elif "coffee" in cmd and "off" in cmd:
	return "b"
    elif "light" in cmd and "on" in cmd:
	return "c"
    elif "light" in cmd and "off" in cmd:
	return "d"  


while True:
    val = checkCommandExists()
    if val != None:
	s = getSerialCommand(val)
	#ser.write(s)
	print s

	
