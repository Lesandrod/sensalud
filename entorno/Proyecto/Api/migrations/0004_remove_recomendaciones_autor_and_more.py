# Generated by Django 4.1.4 on 2022-12-12 10:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0003_alter_recomendaciones_tipo_alter_usuarios_estado_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recomendaciones',
            name='autor',
        ),
        migrations.RemoveField(
            model_name='recomendaciones',
            name='fec_pub',
        ),
        migrations.RemoveField(
            model_name='recomendaciones',
            name='tipo',
        ),
    ]
