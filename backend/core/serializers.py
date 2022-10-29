from dataclasses import fields
from rest_framework import serializers
from .models import DummyReading

class DummyReadingSerializers(serializers.ModelSerializer):
    class Meta:
        model= DummyReading
        fields = "__all__"