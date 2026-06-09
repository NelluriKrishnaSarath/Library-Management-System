from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:

        model = Book

        fields = '__all__'

    def get_image(self, obj):

        if obj.image:

            return obj.image.url

        return "/media/books/default_book.jpg"