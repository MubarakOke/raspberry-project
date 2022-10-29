from time import sleep
import requests
import random

def obtain_data():
    data= {"sensor1": random.randint(0,50),
            "sensor2": random.randint(0,50),
            "sensor3": random.randint(0,50),
            "sensor4": random.randint(0,50)}
    return data
    
def send_data(base_url):
    absolute_url= f"{base_url}/api/create-dummy-data/"
    data= obtain_data()
    try:
        response = requests.post(absolute_url, data=data)
        print("data sent")
    except requests.exceptions.RequestException as error:
        print("data not sent")

def run():
    while True:
        send_data(base_url="http://localhost:8000")
        sleep(5)

if __name__ == '__main__':
    print("sending data...........................")
    run()