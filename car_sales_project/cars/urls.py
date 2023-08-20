from django.urls import path
from .views import CarListCreateView, CarRetrieveUpdateDeleteView

urlpatterns = [
    path('cars/', CarListCreateView.as_view(), name='car-list-create'),
    path('cars/<int:pk>/', CarRetrieveUpdateDeleteView.as_view(), name='car-detail'),
]
