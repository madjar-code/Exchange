import uuid
from django.db import models


class UUIDSlugModel(models.Model):
    id = models.UUIDField(
        primary_key = True,
        default = uuid.uuid4,
        editable = False)
    slug = models.SlugField(
        max_length=255,
        unique=True, 
        null=True, 
        blank=True)
    
    class Meta:
        abstract = True


class TimeStampedModel(models.Model):
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True
