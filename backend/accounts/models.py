from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    GENDER_CHOICES = (

        ('Male', 'Male'),

        ('Female', 'Female'),
    )

    MEMBER_CHOICES = (

    ('Student', 'Student'),

    ('Librarian', 'Librarian'),
)
    

    first_name = models.CharField(

        max_length=100,

        null=True,

        blank=True
    )

    last_name = models.CharField(

        max_length=100,

        null=True,

        blank=True
    )

    address = models.TextField(

        null=True,

        blank=True
    )

    gender = models.CharField(

        max_length=10,

        choices=GENDER_CHOICES,

        null=True,

        blank=True
    )

    email = models.EmailField(

        unique=True,

        null=True,

        blank=True
    )

    phone = models.CharField(

        max_length=15,

        null=True,

        blank=True
    )

    dob = models.DateField(

        null=True,

        blank=True
    )

    registration_date = models.DateField(

        null=True,

        blank=True
    )

    member_type = models.CharField(

        max_length=20,

        choices=MEMBER_CHOICES,

        null=True,

        blank=True
    )

    role = models.CharField(

        max_length=20,

        default='STUDENT'
    )

    def __str__(self):

        return self.username