# Generated by Django 3.2.2 on 2021-05-14 11:20

from django.db import migrations
from django.db import transaction
from django.db.utils import IntegrityError
import json 

def get_json(path: str):

    with open(path) as f:
        data = [json.loads(line) for line in f]
        return data



def add_data(apps, schema_editor):
    Model = apps.get_model("products", "Products_Model")
    data_list = get_json("/home/aradhya/Desktop/symmetrical-chainsaw/backend/ecomm/out.jl")
    
    for data in data_list:
        img = data["img_src"]
        color = data["colors"]   
        tag = data["tag"]
        name = data["name"]
        stars = data["stars"]
        revs = data["revs"]
        price = data["price"]
        og_price = data["og_price"]

        try:
            with transaction.atomic():
                model = Model(img_src=img, colors=color, tags=tag, name=name,
                          stars=stars, revs=revs, price=price, og_price=og_price)

                model.save()

        except IntegrityError:
            print("IntegrityError", price, og_price)
            model.delete()   

class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_products_model_price'),
    ]

    operations = [
        migrations.RunPython(add_data)
    ]
