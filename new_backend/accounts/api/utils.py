import jwt
from accounts.models import User
from new_backend.settings import SECRET_KEY


def get_user(token):
    user_id = jwt.decode(
        token,
        key=SECRET_KEY,
        algorithms="HS256")['user_id']
    return User.objects.filter(id=user_id).first()


def get_user_with_ID(user_id):
    return User.objects.filter(id=user_id).first()