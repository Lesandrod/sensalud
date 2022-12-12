from django.contrib import admin
from.models import Usuarios,Contactos,Registros,Autores,Recomendaciones

#vista usuarios
class UsuariosAdmin(admin.ModelAdmin):
    list_display=("id_usuario","nombres","apellidos","fec_nac","correo","password","estado")

#vista contactos
class ContactosAdmin(admin.ModelAdmin):
    list_display=("id_contacto","nombres","correo","celular","usuario")

#vista registros
class RegistrosAdmin(admin.ModelAdmin):
    list_display=("id_registro","usuario","fec_reg","temperatura")

#vista autores
class AutoresAdmin(admin.ModelAdmin):
    list_display=("id_autor","nombres","especialidad")

#vista recomendaciones
class RecomendacionesAdmin(admin.ModelAdmin):
    list_display=("id","titulo","detalles")

admin.site.register(Usuarios,UsuariosAdmin)
admin.site.register(Contactos,ContactosAdmin)
admin.site.register(Registros,RegistrosAdmin)
admin.site.register(Autores,AutoresAdmin)
admin.site.register(Recomendaciones,RecomendacionesAdmin)

