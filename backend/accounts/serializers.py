from rest_framework import serializers

from .models import User


class RegisterSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = User

        fields = [

            'username',

            'first_name',

            'last_name',

            'address',

            'gender',

            'email',

            'phone',

            'dob',

            'registration_date',

            'member_type',

            'password',
        ]

        extra_kwargs = {

            'password': {

                'write_only': True
            }
        }

    def create(self, validated_data):

        user = User.objects.create_user(

            username=
            validated_data['username'],

            first_name=
            validated_data['first_name'],

            last_name=
            validated_data['last_name'],

            address=
            validated_data['address'],

            gender=
            validated_data['gender'],

            email=
            validated_data['email'],

            phone=
            validated_data['phone'],

            dob=
            validated_data['dob'],

            registration_date=
            validated_data[
                'registration_date'
            ],

            member_type=
            validated_data[
                'member_type'
            ],

            password=
            validated_data['password']
        )

        return user