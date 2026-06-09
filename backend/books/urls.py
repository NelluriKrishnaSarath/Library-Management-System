from django.urls import path
import books.views
from .views import search_books

from .views import (

    book_list,

    upload_books_excel,

    admin_dashboard,
    add_book,
    update_book,
    delete_book,
    upload_pdf
)

urlpatterns = [

    path(
        '',
        book_list
    ),

    path(
        'upload-excel/',
        upload_books_excel
    ),

    path(
        'admin-dashboard/',
        admin_dashboard
    ),
    path(
    'add/',
    add_book
),

path(
    'update/<int:book_id>/',
    update_book
),

path(
    'delete/<int:book_id>/',
    delete_book
),

path(
    'upload-pdf/',
    upload_pdf
),
path(
    'search-books/',
    search_books
),
]