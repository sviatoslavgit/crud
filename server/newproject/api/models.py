from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=50)
    release_date = models.IntegerField()

    def __str__(self):
        return self.title
    