from django.db import models

class members_users(models.Model):
    username = models.CharField(max_length=100)
    Email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    companyname = models.CharField(max_length=100, blank=True, null=True)

class jobs(models.Model):
    Status = models.CharField(max_length=100)
    idInput = models.CharField(primary_key=True,max_length=100)
    yearsInput = models.IntegerField()
    position = models.CharField(max_length=100)
    about_us = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    required = models.CharField(max_length=300)
    loc = models.CharField(max_length=100)
    Salary =models.DecimalField(max_digits=10, decimal_places=2)
    Hours=models.IntegerField()
    companyname = models.CharField(max_length=100)

class applyjobs(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    address =models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)
    Email = models.EmailField(unique=True)
    idInput = models.CharField(primary_key=True,max_length=100)
    username = models.CharField(unique=True,null=False,max_length=100)

class contacts(models.Model):
    tname = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100)
    Email = models.EmailField(unique=True)
    message = models.CharField(max_length=500)
