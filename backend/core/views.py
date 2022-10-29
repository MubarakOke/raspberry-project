from django.shortcuts import render
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.generics import DestroyAPIView, ListAPIView, UpdateAPIView, CreateAPIView
from .serializers import DummyReadingSerializers
from .models import DummyReading
# Create your views here.
class CreateDummyReadingViews(CreateAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class= DummyReadingSerializers

class ListDummyReadingViews(ListAPIView):
    serializer_class= DummyReadingSerializers
    queryset= DummyReading.objects.all()
