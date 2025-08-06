from django.shortcuts import render
from rest_framework import viewsets
from .models import Acta, Compromiso, Gestion
from .serializers import ActaSerializer, CompromisoSerializer, GestionSerializer

#el view set para no poner todos los campos de api (get, post, put, delete ccc:, estos se relacionan con urls.py de 
#la api no del proyecto basedatos principal)

class ActaViewSet(viewsets.ModelViewSet):
    queryset = Acta.objects.all()
    serializer_class = ActaSerializer

class CompromisoViewSet(viewsets.ModelViewSet):
    queryset = Compromiso.objects.all()
    serializer_class = CompromisoSerializer

class GestionViewSet(viewsets.ModelViewSet):
    queryset = Gestion.objects.all()
    serializer_class = GestionSerializer
