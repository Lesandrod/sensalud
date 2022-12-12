from django.db import models
#from sre_parse import CATEGORIES
#from unicodedata import category

#My Models

#Usuarios
class Usuarios(models.Model):
    A = 'Saludable'
    B =  'Enfermo'
    C = 'Recuperado'

    estados=(
    ( A ,'Saludable'),
    ( B ,'Enfermo'),
    ( C ,'Recuperado')
    )

    id_usuario=models.AutoField(primary_key=True)
    nombres=models.CharField('Nombres', max_length=50, null=False)
    apellidos=models.CharField('Apellidos', max_length=50, null=False)
    fec_nac=models.DateField('Fecha de Nacimiento', null=False)
    correo=models.EmailField('Correo', max_length=100, null=False)
    password=models.CharField('ContraseÃ±a', max_length=150, null=False)
    estado=models.CharField('Estado', choices=estados, max_length=10)

    class Meta:
        verbose_name="Usuario"
        verbose_name_plural="Usuarios"

    def __str__(self):
        return f'{self.nombres} {self.apellidos}'

#Contactos
class Contactos(models.Model):
    id_contacto=models.AutoField(primary_key=True)
    nombres=models.CharField('Nombres', max_length=50, null=False)
    correo=models.EmailField('Correo', max_length=100, null=False)
    celular=models.IntegerField()
    usuario=models.OneToOneField(Usuarios,on_delete=models.CASCADE)

    class Meta:
        verbose_name="Contacto"
        verbose_name_plural="Contactos"

    def __str__(self):
        return self.nombres

#Registros
class Registros(models.Model):
    id_registro=models.AutoField(primary_key=True)
    usuario=models.ForeignKey(Usuarios,on_delete=models.CASCADE)
    fec_reg=models.DateTimeField('Registro', null=False)
    temperatura=models.DecimalField('Temperatura',max_digits=4, decimal_places=2,null=False)

    class Meta:
        verbose_name="Registro"
        verbose_name_plural="Registros"

    def __str__(self):
        return str(self.temperatura)

#Autores
class Autores(models.Model):
    id_autor=models.AutoField(primary_key=True)
    nombres=models.CharField('Nombres', max_length=60, null=False)
    especialidad=models.CharField('Especialidad', max_length=50, null=False)

    class Meta:
        verbose_name="Autor"
        verbose_name_plural="Autores"

    def __str__(self):
        return self.nombres

#Recomendaciones
class Recomendaciones(models.Model):
   

    id=models.AutoField(primary_key=True)
    titulo=models.CharField('Titulo', max_length=50, null=False)
    detalles=models.TextField()
    

    class Meta:
        verbose_name="Recomendacion"
        verbose_name_plural="Recomendaciones"
    
    def __str__(self):
        return self.titulo