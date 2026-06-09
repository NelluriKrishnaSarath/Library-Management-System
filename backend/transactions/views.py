from rest_framework.decorators import api_view
from books.models import Book
from rest_framework.response import Response
from accounts.models import User
from .models import BorrowBook
from datetime import timedelta
from datetime import date

borrow_date = date.today()

due_date = borrow_date + timedelta(days=7)


@api_view(['GET'])
def student_dashboard(request):

    username = request.GET.get(
        "username"
    )

    try:

        student = User.objects.get(
            username=username
        )

    except User.DoesNotExist:

        return Response({

            "error":
            "Student Not Found"

        })

    today = date.today()

    total_borrowed_books = BorrowBook.objects.filter(
        student=student
    ).count()

    currently_borrowed_books = BorrowBook.objects.filter(
        student=student,
        status="Borrowed"
    ).count()

    returned_books = BorrowBook.objects.filter(
        student=student,
        status="Returned"
    ).count()

    fine_amount = 0

    overdue_books = BorrowBook.objects.filter(
        student=student,
        status="Borrowed",
        due_date__lt=today
    )

    for book in overdue_books:

        late_days = (
            today -
            book.due_date
        ).days

        fine_amount += (
            late_days * 100
        )

    return Response({

        "total_borrowed_books":
        total_borrowed_books,

        "currently_borrowed_books":
        currently_borrowed_books,

        "returned_books":
        returned_books,

        "fine_amount":
        fine_amount

    })



@api_view(['GET'])
def student_list(request):

    students = User.objects.filter(
        member_type="Student"
    )

    data = []

    for student in students:

        full_name = f"{student.first_name or ''} {student.last_name or ''}".strip()

        data.append({

            "id": student.id,

            "username": student.username,

            "name": full_name,

            "email": student.email,

            "phone": student.phone,

            "address": student.address
        })

    return Response(data)





from datetime import datetime, timedelta

@api_view(['POST'])
def issue_book(request):

    student_name = request.data.get(
        "student_name"
    )

    book_title = request.data.get(
        "book_title"
    )

    borrow_date = request.data.get(
        "borrow_date"
    )

    try:

        student = User.objects.get(
            username=student_name
        )

    except User.DoesNotExist:

        return Response({

            "error":
            "Student Not Found"
        })

    try:

        book = Book.objects.get(
            title=book_title
        )

    except Book.DoesNotExist:

        return Response({

            "error":
            "Book Not Found"
        })

    if book.available_copies <= 0:

        return Response({

            "error":
            "Book Not Available"
        })

    borrow_date_obj = datetime.strptime(

        borrow_date,

        "%Y-%m-%d"

    ).date()

    due_date = borrow_date_obj + timedelta(
        days=7
    )

    BorrowBook.objects.create(

        student=student,

        book=book,

        borrow_date=borrow_date_obj,

        due_date=due_date,

        status="Borrowed"
    )

    book.available_copies -= 1

    book.save()

    return Response({

        "message":
        "Book Issued Successfully",

        "due_date":
        str(due_date)
    })



@api_view(['POST'])
def return_book(request):

    borrow_id = request.data.get(
        "borrow_id"
    )

    print("Borrow ID =", borrow_id)

    try:

        borrow = BorrowBook.objects.get(
            id=borrow_id
        )

    except BorrowBook.DoesNotExist:

        return Response({

            "error":
            "Borrow Record Not Found"

        }, status=404)

    today = date.today()

    fine = 0

    if today > borrow.due_date:

        late_days = (
            today - borrow.due_date
        ).days

        fine = late_days * 100

    borrow.status = "Returned"

    borrow.return_date = today

    borrow.save()

    book = borrow.book

    book.available_copies += 1

    book.save()

    return Response({

        "message":
        "Book Returned Successfully",

        "fine":
        fine
    })
@api_view(['GET'])
def my_books(request):

    username = request.GET.get("username")

    student = User.objects.get(
        username=username
    )

    books = BorrowBook.objects.filter(
        student=student,
        status="Borrowed"
    )

    data = []

    for book in books:

        data.append({

            "id": book.id,

            "book_name": book.book.title,

            "author": book.book.author,

            "borrow_date": book.borrow_date,

            "due_date": book.due_date,

            "status": book.status
        })

    return Response(data)


