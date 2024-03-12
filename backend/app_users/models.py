from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from django.core.validators import RegexValidator

from .managers import UserManager



class CustomUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255)
    phone_number = models.CharField(
        max_length=13,
        validators=[RegexValidator(r"^\+996\d{9}$")],
        blank=True,
        null=True,
    )
    created_at = models.DateField(auto_now_add=True)

    is_verified = models.BooleanField(default=False)
    token_auth = models.CharField(max_length=255,blank=True,null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self) -> str:
        return self.email
    
    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        indexes = [
                models.Index(fields=['id']), 
                models.Index(fields=['email']), 
                models.Index(fields=['username']), 
            ]
