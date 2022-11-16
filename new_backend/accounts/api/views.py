from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from accounts.models import User
from .serializers import \
    RegisterUserSerializer,\
    UserSerializer
from .utils import get_user


class CustomUserCreate(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        """Создание пользователя"""
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class CurrentUserView(APIView):
    permission_classes = (AllowAny,)
    
    def get(self, request):
        """Получение текущего пользователя по токену"""
        token = request.headers['Authorization'].split()[1]
        user = get_user(token)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        """Редактирование текущего пользователя"""
        data = request.data
        token = request.headers['Authorization'].split()[1]
        user = get_user(token)
        user.address = data['address']
        user.email = data['email']
        user.description = data['description']
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class UserView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, slug):
        """Получение пользователя по его slug"""
        user = User.objects.filter(slug=slug).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)