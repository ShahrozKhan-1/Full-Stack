from django.shortcuts import render
from rest_framework.response import Response
from .serializers import *
from rest_framework.decorators import api_view


@api_view(['POST',])
def addtodo(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response({"message" : "error"})
    

@api_view(['GET'])
def seetodo(request):
    query = Todo.objects.all()
    serializer = TodoSerializer(query, many=True)
    return Response(serializer.data)

@api_view(['PATCH', 'PUT'])
def updatetodo(request, pk):
    query = Todo.objects.get(pk=pk)
    if request.method == 'PUT':
        serializer = TodoSerializer(query, data=request.data)  # Full update
    elif request.method == 'PATCH':
        serializer = TodoSerializer(query, data=request.data, partial=True)  # Partial update

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response({"message" : "error"})
    
    
@api_view(['DELETE'])
def deletetodo(request, pk):
    query = Todo.objects.get(pk=pk)    
    query.delete()
    return Response({'message': 'Todo deleted successfully'})
# Create your views here.
