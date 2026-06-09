from django.urls import path
from .views import  return_book, student_list
from .views import student_dashboard
from .views import issue_book
from .views import my_books

urlpatterns = [

    path(

        'student-dashboard/',

        student_dashboard
    ),
    path(
        'students/',
        student_list
    ),
    path(
    'issue-book/',
    issue_book
),
path(
    'return-book/',
    return_book
),
path(
    'my-books/',
    my_books
),



]