# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-07-10 21:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lexicon', '0004_auto_20180706_2117'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lexicalentry',
            options={'ordering': ('headword',), 'verbose_name': 'Entrada léxica', 'verbose_name_plural': 'Entradas léxicas'},
        ),
        migrations.AlterField(
            model_name='lexicalentry',
            name='headword',
            field=models.CharField(db_index=True, max_length=256, verbose_name='Entrada'),
        ),
        migrations.AlterField(
            model_name='lexicalentry',
            name='ref',
            field=models.CharField(max_length=64, verbose_name='Identificación única'),
        ),
    ]
