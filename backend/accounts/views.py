from django.contrib.auth import authenticate

from rest_framework.decorators import api_view

from rest_framework.response import Response

from .models import User

from .serializers import RegisterSerializer


@api_view(['POST'])
def register_view(request):

    serializer = RegisterSerializer(

        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({

            'message':
            'Registration Successful'
        })

    return Response(serializer.errors)


@api_view(['POST'])
def login_view(request):

    username = request.data.get(
        'username'
    )

    password = request.data.get(
        'password'
    )

    user = authenticate(

        username=username,

        password=password
    )

    if user is not None:

        return Response({

    'message':
    'Login Success',

    'member_type':
    user.member_type,

    'username':
    user.username
})
    return Response({

        'error':
        'Invalid Credentials'
    })
@api_view(['GET'])
def search_students(request):
    ...
@api_view(['PUT'])
def update_student(request, id):

    try:

        student = User.objects.get(
            id=id
        )

    except User.DoesNotExist:

        return Response({

            "error":
            "Student Not Found"

        })

    student.first_name = request.data.get(
        "first_name"
    )

    student.last_name = request.data.get(
        "last_name"
    )

    student.email = request.data.get(
        "email"
    )

    student.phone = request.data.get(
        "phone"
    )

    student.address = request.data.get(
        "address"
    )

    student.save()

    return Response({

        "message":
        "Student Updated Successfully"

    })
@api_view(['GET'])
def get_student(request, id):

    try:

        student = User.objects.get(
            id=id
        )

    except User.DoesNotExist:

        return Response({

            "error":
            "Student Not Found"

        })

    return Response({

        "id":
        student.id,

        "first_name":
        student.first_name,

        "last_name":
        student.last_name,

        "username":
        student.username,

        "email":
        student.email,

        "phone":
        student.phone,

        "address":
        student.address

    })


@api_view(['PUT'])
def update_student(request, id):

    try:

        student = User.objects.get(
            id=id
        )

    except User.DoesNotExist:

        return Response({

            "error":
            "Student Not Found"

        })

    student.first_name = request.data.get(
        "first_name"
    )

    student.last_name = request.data.get(
        "last_name"
    )

    student.username = request.data.get(
        "username"
    )

    student.email = request.data.get(
        "email"
    )

    student.phone = request.data.get(
        "phone"
    )

    student.address = request.data.get(
        "address"
    )

    student.save()

    return Response({

        "message":
        "Student Updated Successfully"

    })