import os
import random
from time import sleep
from core.models import DummyReading
import django
django.setup()
os.environ.setdefault('DJANGO_SETTINGS_MODULE','raspberry.settings')


def populate_dummy_reading():
    sensor1= random.randint(0,50)
    sensor2= random.randint(0,50)
    sensor3= random.randint(0,50)
    sensor4= random.randint(0,50)
    DummyReading.objects.create(sensor1=sensor1, sensor2=sensor2, sensor3=sensor3, sensor4=sensor4)

    print("Dummy data populated")

def run():
    while True:
        populate_dummy_reading()
        sleep(5)

if __name__ == '__main__':
    print("populating dummy data.....................")
    run()