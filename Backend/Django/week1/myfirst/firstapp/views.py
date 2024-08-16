from django.shortcuts import render
from django.http import HttpResponse

def firstLogic(request, month):
    a = month
    if a == 'jan':
        return HttpResponse("The challenge is to learn Python")
    else:
        return HttpResponse("No page matching your input")


def secondLogic(request):
    return HttpResponse('<h1>Hello, World!</h1>')


def thirdLogic(request):
    return HttpResponse('<h1>Hello, World!</h1>')


def fourthLogic(request, month, week):
    if week == 2:
        return HttpResponse("there are four weeks in a month")

# Create your views here.
