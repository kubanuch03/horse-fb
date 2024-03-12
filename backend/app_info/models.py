from django.db import models




class Info(models.Model):
    title = models.CharField(max_length=255,verbose_name='Заголовок')
    description = models.TextField(verbose_name='Информация')

    class Meta:
        verbose_name = 'Информационный блок'
        verbose_name_plural = 'Информационный блок'
        indexes = [
            models.Index(fields=['id']),
            models.Index(fields=['title'])
        ]


