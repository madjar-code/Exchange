from django.contrib import admin
from .models import *


class BookAdmin(admin.ModelAdmin):
    search_fields = ('title', 'author')
    list_filter = ('genre', 'author', 'user')
    ordering = ('-created_at', )
    list_display = ('id','title', 'genre', 'author', 'user',)
    readonly_fields = ('created_at', 'updated_at', 'slug')


class ExchangeAdmin(admin.ModelAdmin):
    search_fields = ('user', )
    list_filter = ('user', 'offered_books')
    list_display = (
        '__str__', 'address', 'slug')
    readonly_fields = ('created_at', 'updated_at', 'slug')


admin.site.register(Book, BookAdmin)
admin.site.register(Exchange, ExchangeAdmin)
