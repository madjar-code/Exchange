import random, string
from rest_framework.response import Response
from accounts.api.utils import get_user, get_user_with_ID


def create_slug(prefix, model_class, length=6):
    """Создание slug"""
    letters = string.ascii_letters
    code = ''.join(
        random.choice(letters)\
        for _ in range(length))
    slug = prefix + '-' + code
    if model_class.objects.filter(slug=slug).exists():
        return create_slug(prefix, model_class)
    return slug


def secure_get_user_by_token(request):
    token = request.headers['Authorization'].split()[1]
    user = get_user(token)
    return user
