from rest_framework.serializers import \
    ModelSerializer,\
    SerializerMethodField

from exchange_app.models import *


class BookSerializer(ModelSerializer):
    user_slug = SerializerMethodField()

    def get_user_slug(self, obj):
        return obj.user.slug
        
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'slug', 'user',
                  'genre', 'description', 'user_slug')


class SimpleExchangeSerializer(ModelSerializer):
    class Meta:
        model = Exchange
        fields = ('offered_books', 'user', 'requirements_text',
                  'address', 'id')


class ExchangeSerializer(ModelSerializer):
    offered_books = BookSerializer(many=True)
    creation_date = SerializerMethodField()
    username = SerializerMethodField()
    user_slug = SerializerMethodField()

    def get_user_slug(self, obj):
        return obj.user.slug

    def get_creation_date(self, obj):
        return str(obj.created_at)[:10]

    def get_username(self, obj):
        username = obj.user.username
        return username

    class Meta:
        model = Exchange
        exclude = ('created_at', 'updated_at', 'is_active',)

    def create(self, validated_data):
        books_data = validated_data.pop('offered_books')
        exchange = Exchange.objects.create(**validated_data)
        for book in books_data:
            book, created = Book.objects.get_or_create(
                title=book['title'],
                author=book['author'],
                genre=book['genre'],
                description=book['description'],
                user=book['user'],
            )
            exchange.offered_books.add(book)
        return exchange
