from django.db import models

from app_users.models import CustomUser


class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    text_review = models.TextField()
    image = models.ImageField(upload_to="review_image/",)
    stars = models.IntegerField(choices=[(i, i) for i in range(1, 6)],blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return str(self.user)
    
    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

        indexes = [
                models.Index(fields=['id']), 
                models.Index(fields=['user']),  
            ]

