from rest_framework.decorators import api_view
from rest_framework.response import Response

from books.models import Book
from accounts.models import User
from transactions.models import BorrowBook


@api_view(['GET'])
def dashboard_data(request):

    data = {

        'total_books':
        Book.objects.count(),

        'total_students':
        User.objects.filter(
            role='STUDENT'
        ).count(),

        'issued_books':
        BorrowBook.objects.filter(
            is_returned=False
        ).count(),

        'returned_books':
        BorrowBook.objects.filter(
            is_returned=True
        ).count(),
    }

    return Response(data)