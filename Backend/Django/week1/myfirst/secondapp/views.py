from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods


def first(request):
    return HttpResponse('Hello World')

def second(request):
    return HttpResponse('<h1>Hello, World!</h1>')

def third(request, week):
    if week == 1:
        return HttpResponse(f"this is week {week}")
    elif week == 2:
        return HttpResponse(f"this is week {week}")
    elif week == 3:
        return HttpResponse(f"this is week {week}")
    elif week == 4:
        return HttpResponse(f"this is week {week}")
    elif week == 5:
        return HttpResponse(f"this is week {week}")
    elif week == 6:
        return HttpResponse(f"this is week {week}")
    elif week == 7:
        return HttpResponse(f"this is week {week}")
    else:
        return HttpResponseNotFound("No matching page found")

@require_http_methods(["GET"])
def fourth(request, week, days):
    print(request.method)
    if days == 'mon':
        return HttpResponse(f"this is week {week} Monday")
    elif days == 'tue':
        return HttpResponse(f"this is week {week} Tuesday")
    elif days == 'wed':
        return HttpResponse(f"this is week {week} Wednesday")
    elif days == 'thur':
        return HttpResponse(f"this is week {week} Thursday")
    elif days == 'fri':
        return HttpResponse(f"this is week {week} Friday")
    elif days == 'sat':
        return HttpResponse(f"this is week {week} Saturday")
    elif days == 'sun':
        return HttpResponse(f"this is week {week} Sunday")
    else:
        return HttpResponseNotFound("No matching page found")

# Create your views here.
