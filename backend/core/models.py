from django.db import models

# Create your models here.

class DummyReading(models.Model):
    sensor1= models.CharField(blank=True, null=True, max_length=200)
    sensor2= models.CharField(blank=True, null=True, max_length=200)
    sensor3= models.CharField(blank=True, null=True, max_length=200)
    sensor4= models.CharField(blank=True, null=True, max_length=200)

    class Meta:
        ordering= ('-id',)