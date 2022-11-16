from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from exchange_app.models import Book, Exchange
from accounts.models import User
from common.utils import secure_get_user_by_token
from .serializers import\
    BookSerializer,\
    ExchangeSerializer,\
    SimpleExchangeSerializer


class AllExchangesView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        """Получение всех элементов обмена"""
        exchanges = Exchange.objects.filter(is_active=True)
        serializer = ExchangeSerializer(exchanges, many=True)
        return Response(serializer.data)


class ExchangeView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, slug):
        """Получение элемента обмена по его slug"""
        exchange = Exchange.objects.filter(is_active=True, slug=slug).first()
        serializer = ExchangeSerializer(exchange)
        return Response(serializer.data)
    
    def delete(self, request, slug):
        """Удаление элемента обмена по ее slug"""
        exchange = Exchange.objects.filter(slug=slug).first()
        exchange.delete()
        return Response({'message': 'success'})


class BookView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, slug):
        """Получение книги по его slug"""
        book = Book.objects.filter(is_active=True, slug=slug).first()
        serializer = BookSerializer(book)
        return Response(serializer.data)
    
    def delete(self, request, slug):
        """Удаление книги по ее slug"""
        book = Book.objects.filter(slug=slug).first()
        book.delete()
        return Response({'message': 'success'})


class CurrentBooksView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        """Получение книг для текущего пользователя"""
        user = secure_get_user_by_token(request)
        books = Book.objects.filter(user=user, is_active=True)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        """Создание книги для пользователя по токену"""
        user = secure_get_user_by_token(request)
        request.data['user'] = str(user.id)
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class CurrentExchangesView(APIView):
    permission_classes = (AllowAny, )

    def get(self, request):
        """Получение элементов обмена для текущего пользователя"""
        user = secure_get_user_by_token(request)
        exchanges = Exchange.objects.filter(user=user, is_active=True)
        serializer = ExchangeSerializer(exchanges, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        """Создание объявления для пользоватея по токену"""
        user = secure_get_user_by_token(request)
        request.data['user'] = str(user.id)
        serializer = ExchangeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
        return Response(serializer.data)


class BooksViewForUser(APIView):
    permission_classes = (AllowAny, )

    def get(self, request, slug):
        """Получение книг по slug пользователя"""
        user = User.objects.filter(slug=slug).first()
        books = Book.objects.filter(user=user, is_active=True)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)


class ExchangesViewForUser(APIView):
    permission_classes = (AllowAny, )

    def get(self, request, slug):
        """Получение элементов обмена по slug пользователя"""
        user = User.objects.filter(slug=slug).first()
        exchanges = Exchange.objects.filter(user=user, is_active=True)
        serializer = ExchangeSerializer(exchanges, many=True)
        return Response(serializer.data)

