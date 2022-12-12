from .models import Usuarios,Contactos,Registros,Autores,Recomendaciones
from rest_framework import viewsets, permissions
from .serializers import UsuariosSerializer,ContactosSerializer,RegistrosSerializer,AutoresSerializer,RecomendacionesSerializer

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class= UsuariosSerializer

class ContactosViewSet(viewsets.ModelViewSet):
    queryset = Contactos.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class= ContactosSerializer

class RegistrosViewSet(viewsets.ModelViewSet):
    queryset = Registros.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class= RegistrosSerializer

class AutoresViewSet(viewsets.ModelViewSet):
    queryset = Autores.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class= AutoresSerializer

class RecomendacionesViewSet(viewsets.ModelViewSet):
    queryset = Recomendaciones.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class= RecomendacionesSerializer