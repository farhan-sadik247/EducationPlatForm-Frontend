# Generated by Django 4.2.7 on 2023-11-24 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_remove_fav_student_remove_bought_item_bought_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='content',
            name='remarks',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='content',
            name='title',
            field=models.CharField(default='', max_length=200),
        ),
    ]