# Generated by Django 3.2.2 on 2021-05-14 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products_model',
            name='price',
            field=models.CharField(max_length=10),
        ),
    ]