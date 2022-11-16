import random, string, uuid
from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    """
    Кастомный пользователь
    """
    id = models.UUIDField(
        primary_key = True,
        default = uuid.uuid4,
        editable = False)
    username = models.CharField(
        unique=True,
        max_length=30,
        blank=False,
        null=True)
    email = models.EmailField(
        unique=True, 
        blank=False)
    address = models.CharField(
        max_length=255, 
        blank=True, 
        null=True)
    slug = models.SlugField(
        max_length=255,
        unique=True, 
        null=True, 
        blank=True)
  
    description = models.TextField(blank=True, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f"{self.username}" or ''

    @staticmethod
    def generate_user_string(length=6):
        letters = string.ascii_letters
        random_string = ''.join(random.choice(letters) for _ in range(length))
        return random_string

    def save(self, *args, **kwargs):
        slug = slugify(self.username)
        random_string = User.generate_user_string()
        self.slug = slug + "-" + random_string
        super().save(*args, **kwargs)
