from django.db import models
from accounts.models import User
from books.models import Book

# Create your models here.

from django.db import models

from accounts.models import User

from books.models import Book


class BorrowBook(models.Model):

    student = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    book = models.ForeignKey(
        Book,
        on_delete=models.CASCADE
    )

    borrow_date = models.DateField()

    due_date = models.DateField()

    return_date = models.DateField(
        null=True,
        blank=True
    )

    status = models.CharField(

        max_length=20,

        choices=[

            ("Borrowed","Borrowed"),

            ("Returned","Returned"),

            ("Pending","Pending")
        ],

        default="Borrowed"
    )
    fine_amount = models.IntegerField(
    default=0
)
    def __str__(self):

        return f"{self.student.username} - {self.book.title}"