from django.urls import path
from .views import *

app_name = 'exchange_app'

urlpatterns = [
    path("books/current/", CurrentBooksView.as_view()),
    path("exchanges/current/", CurrentExchangesView.as_view()),
    path('books/<slug:slug>/', BookView.as_view()),
    path("books/for-user/<slug:slug>/", BooksViewForUser.as_view()),
    path('exchanges/<slug:slug>/', ExchangeView.as_view()),
    path("exchanges/for-user/<slug:slug>/", ExchangesViewForUser.as_view()),
    path('exchanges/', AllExchangesView.as_view()),
]