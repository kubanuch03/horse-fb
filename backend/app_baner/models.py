from django.db import models


class Baner(models.Model):
    image = models.ImageField(upload_to='baner/', verbose_name='Картинка Банера')
