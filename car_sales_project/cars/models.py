from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    colour = models.CharField(max_length=50)
    image = models.ImageField(upload_to='')

    def __str__(self):
        return f"Picture of {self.make} {self.year} {self.make} {self.model} {self.colour} {self.image}"
