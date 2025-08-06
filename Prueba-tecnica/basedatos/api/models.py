from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    ROLES = (
        ('admin', 'Administrador'),
        ('usuario', 'Usuario'),
    )
    rol = models.CharField(max_length=10, choices=ROLES, default='usuario')

class Acta(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    fecha = models.DateField(auto_now_add=True)
    archivo = models.FileField(upload_to='actas/')

    def __str__(self):
        return self.titulo

class Compromiso(models.Model):
    acta = models.ForeignKey(Acta, on_delete=models.CASCADE)
    descripcion = models.TextField()
    cumplido = models.BooleanField(default=False)

class Gestion(models.Model):
    compromiso = models.ForeignKey(Compromiso, on_delete=models.CASCADE)
    detalle = models.TextField()
    fecha = models.DateField(auto_now_add=True)

