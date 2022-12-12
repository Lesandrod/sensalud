from rest_framework import serializers
from .models import Usuarios,Contactos,Registros,Autores,Recomendaciones

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = ["id_usuario","nombres","apellidos","fec_nac","correo","password","estado"]

class ContactosSerializer(serializers.ModelSerializer):
    usuario = serializers.StringRelatedField()
    class Meta:
        model = Contactos
        fields = ["id_contacto","nombres","correo","celular","usuario"] 

class RegistrosSerializer(serializers.ModelSerializer):
    usuario = serializers.StringRelatedField()
    class Meta:
        model = Registros
        fields = ["id_registro","usuario","fec_reg","temperatura"]

class AutoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autores
        fields = ["id_autor","nombres","especialidad"]

class RecomendacionesSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Recomendaciones
        fields = ["id","titulo","detalles"]