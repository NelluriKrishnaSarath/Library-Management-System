from .serializers import BookSerializer
from .models import Book

from rest_framework.decorators import api_view
from rest_framework.response import Response

import pandas as pd
from django.shortcuts import get_object_or_404
from django.db.models import Sum


@api_view(['GET'])
def book_list(request):

    books = Book.objects.all()

    serializer = BookSerializer(
        books,
        many=True
    )

    return Response(serializer.data)


@api_view(['POST'])
def upload_books_excel(request):

    excel_file = request.FILES.get('file')

    if not excel_file:

        return Response({

            'error':
            'No file uploaded'
        })

    df = pd.read_excel(excel_file)

    for index, row in df.iterrows():

        Book.objects.create(

            title=row['title'],

            author=row['author'],

            category=row['category'],

            language=row['language'],

            total_copies=row['total_copies'],

            available_copies=row['total_copies']
        )

    return Response({

        'message':
        'Books Uploaded Successfully'
    })


from accounts.models import User

@api_view(['GET'])
def admin_dashboard(request):

    books = Book.objects.all()

    total_books = Book.objects.aggregate(
    Sum('total_copies')
)['total_copies__sum'] or 0
    
    available_books = sum(
        book.available_copies
        for book in books
    )

    issued_books = sum(
        book.total_copies -
        book.available_copies
        for book in books
    )

    total_students = User.objects.filter(
        member_type="Student"
    ).count()

    books_data = []

    for book in books:

        books_data.append({

            "id": book.id,

            "title": book.title,

            "author": book.author,

            "category": book.category,

            "total_copies": book.total_copies,

            "available_copies": book.available_copies,

            "borrowed_books":
            book.total_copies -
            book.available_copies,

            "status":
            "Available"
            if book.available_copies > 0
            else "Out Of Stock"
        })

    return Response({

        "total_books":
        total_books,

        "available_books":
        available_books,

        "issued_books":
        issued_books,

        "total_students":
        total_students,

        "books":
        books_data
    })
@api_view(['POST'])
def add_book(request):

    serializer = BookSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message":
            "Book Added Successfully"
        })

    return Response(
        serializer.errors
    )


@api_view(['PUT'])
def update_book(request, book_id):

    book = get_object_or_404(
        Book,
        id=book_id
    )

    serializer = BookSerializer(
        book,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message":
            "Book Updated Successfully"
        })

    return Response(
        serializer.errors
    )


@api_view(['DELETE'])
def delete_book(request, book_id):

    book = get_object_or_404(
        Book,
        id=book_id
    )

    book.delete()

    return Response({
        "message":
        "Book Deleted Successfully"
    })
@api_view(['POST'])
def upload_pdf(request):

    title = request.data.get(
        'title'
    )

    pdf = request.FILES.get(
        'pdf'
    )

    PDFBook.objects.create(

        title=title,

        pdf_file=pdf
    )

    return Response({

        "message":
        "PDF Uploaded Successfully"
    })
@api_view(['POST'])
def add_book(request):

    Book.objects.create(

        title=request.data.get(
            'title'
        ),

        author=request.data.get(
            'author'
        ),

        category=request.data.get(
            'category'
        ),

        language=request.data.get(
            'language'
        ),

        total_copies=request.data.get(
            'total_copies'
        ),

        available_copies=request.data.get(
            'total_copies'
        )
    )

    return Response({

        "message":
        "Book Added Successfully"
    })
@api_view(['GET'])
def search_books(request):
    ...