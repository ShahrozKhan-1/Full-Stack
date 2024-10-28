from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    
    
class CreateTodo(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        todo_all = TodoList.objects.filter(author=user)
        return todo_all
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Create your views here.
