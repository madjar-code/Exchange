from django.urls import path
from .views import *

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name='create_user'),
    path('current/', CurrentUserView.as_view(), name='current_user'),
    path('<slug:slug>/', UserView.as_view(), name='some_user'),
]