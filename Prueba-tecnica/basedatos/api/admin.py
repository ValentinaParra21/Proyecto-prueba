from django.contrib import admin

from django.contrib import admin
from .models import Usuario, Acta, Compromiso, Gestion
from django.contrib.auth.admin import UserAdmin

admin.site.register(Usuario, UserAdmin)
admin.site.register(Acta)
admin.site.register(Compromiso)
admin.site.register(Gestion)

