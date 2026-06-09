from django.db import models

# Create your models here.
class Book(models.Model):

    title = models.CharField(max_length=200)

    author = models.CharField(max_length=200)

    category = models.CharField(max_length=100)

    language = models.CharField(max_length=50)

    description = models.TextField()

    total_copies = models.IntegerField(default=1)

    available_copies = models.IntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(
        upload_to="books/default_book.jpg",
        blank=True,
        null=True
    )

    def __str__(self):

        return self.title