from django.db import models



class Gallery(models.Model):
    images = models.ImageField(upload_to='gallery/%Y/%m/%d/',verbose_name='Картинка')
    created_at = models.DateTimeField(auto_now_add=True)

    
    
    class Meta:
        verbose_name = 'Галерея'
        verbose_name_plural = 'Галереи'
        indexes = [
                models.Index(fields=['id']), 
            ]