from django.db import models
from django.utils.text import slugify

from common.models import *
from common.utils import create_slug
from accounts.models import User


class Book(UUIDSlugModel, TimeStampedModel):
    """
    Класс книги пользователя. Считается, что
    у книги один автор и один жанр (пока).
    """
    GENRE_CHOICES = (
      ("Роман", "Роман"),
      ("Детектив", "Детектив"),
      ("Фантастика", "Фантастика"),
    )

    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    genre = models.CharField(max_length=255,
                             choices=GENRE_CHOICES)
    description = models.TextField(blank=True)
    user = models.ForeignKey(null=True, to=User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Книга"
        verbose_name_plural = "Книги"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        slug = slugify(self.title)
        self.slug = create_slug(slug, Book)
        super().save(*args, **kwargs)


class Exchange(UUIDSlugModel, TimeStampedModel,):
    """Класс объявления об обмене."""
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    requirements_text = models.TextField(default='не указано')
    address = models.CharField(max_length=255, blank=True)
    offered_books = models.ManyToManyField(
        to=Book,
        related_name='exchanges',
        verbose_name='Предлагаемые книги')

    class Meta:
        verbose_name = 'Обмен'
        verbose_name_plural = 'Обмены'

    def __str__(self) -> str:
        return f'Предложение юзера {self.user}'

    def save(self, *args, **kwargs):
        slug = slugify('item')
        self.slug = create_slug(slug, Exchange)
        super().save(*args, **kwargs)
