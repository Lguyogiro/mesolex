# Generated by Django 3.0.7 on 2021-04-04 12:46

from django.db import migrations

from django.contrib.postgres.operations import BtreeGinExtension, TrigramExtension


class Migration(migrations.Migration):

    dependencies = [
        ('lexicon', '0020_auto_20210401_1218'),
    ]

    operations = [
        BtreeGinExtension(),
        TrigramExtension(),
    ]
