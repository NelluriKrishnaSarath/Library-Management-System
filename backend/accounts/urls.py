from django.urls import path
import accounts.views
from .views import get_student, search_students, update_student

from .views import (

    register_view,

    login_view
)

urlpatterns = [

    path(
        'register/',
        register_view
    ),

    path(
        'login/',
        login_view
    ),
    path(
    'search-students/',
    search_students
),
path(
    'update-student/<int:id>/',
    update_student
),
path(
    "student/<int:id>/",
    get_student
),

path(
    "update-student/<int:id>/",
    update_student
),
]