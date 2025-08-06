from django.urls import path, include
from rest_framework import routers
from .views import ActaViewSet, CompromisoViewSet, GestionViewSet

router = routers.DefaultRouter()
router.register('actas', ActaViewSet)
router.register('compromisos', CompromisoViewSet)
router.register('gestiones', GestionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
