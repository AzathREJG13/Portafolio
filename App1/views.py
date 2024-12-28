from django.http import HttpResponse

def index(request):
    return HttpResponse("Bienvenido a la página principal de App1!")
