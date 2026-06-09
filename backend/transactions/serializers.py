from rest_framework import serializers

from .models import BorrowBook


class BorrowBookSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = BorrowBook

        fields = '__all__'