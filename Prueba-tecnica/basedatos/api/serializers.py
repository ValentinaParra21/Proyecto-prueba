from rest_framework import serializers
from .models import Acta, Compromiso, Gestion, Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'rol']

class ActaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acta
        fields = '__all__'

class CompromisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compromiso
        fields = '__all__'

class GestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestion
        fields = '__all__'
