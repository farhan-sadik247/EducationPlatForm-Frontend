# Generated by Django 4.2.7 on 2023-11-21 15:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('course', '0002_course_catagory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fav',
            name='student',
        ),
        migrations.RemoveField(
            model_name='bought_item',
            name='bought',
        ),
        migrations.RemoveField(
            model_name='fav_item',
            name='fav',
        ),
        migrations.AddField(
            model_name='bought_item',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='fav_item',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Bought',
        ),
        migrations.DeleteModel(
            name='Fav',
        ),
    ]
