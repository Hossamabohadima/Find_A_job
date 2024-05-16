# Generated by Django 5.0.4 on 2024-05-16 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0006_applyjobs'),
    ]

    operations = [
        migrations.CreateModel(
            name='contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tname', models.CharField(max_length=100)),
                ('telephone', models.CharField(max_length=100)),
                ('Email', models.EmailField(max_length=254, unique=True)),
                ('message', models.CharField(max_length=500)),
            ],
        ),
    ]
