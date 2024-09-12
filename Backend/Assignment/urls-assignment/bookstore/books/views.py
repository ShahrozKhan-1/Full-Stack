from django.shortcuts import render
from django.http import HttpResponse

def book_detail(request):
    return HttpResponse("This is Books Detail")

def category_list(request):
    return HttpResponse("This is Books Category Lists")

def category_books(request):
    return HttpResponse("This is Specific Book Category")

def register(request):
    return HttpResponse("This is Register")

def cart(request):
    return HttpResponse("This is Cart")

def checkout(request):
    return HttpResponse("This is Checkout")

# Create your views here.
