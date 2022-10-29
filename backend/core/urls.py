from django.contrib import admin
from django.urls import path
from .views import CreateDummyReadingViews, ListDummyReadingViews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('create-dummy-data/', CreateDummyReadingViews.as_view(), name="create-dummy-data"),
    path('list-dummy-data/', ListDummyReadingViews.as_view(), name="list-dummy-data"),
]