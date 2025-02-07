from django.urls import path
from .views import *


urlpatterns = [
    path('add/', addtodo),
    path('read/', seetodo),
    path('update/<int:pk>/', updatetodo),
    path('delete/<int:pk>/', deletetodo),
    
]
