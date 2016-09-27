#!/usr/bin/env python

import os, time

import pika

con = pika.BlockingConnection(pika.URLParameters('amqp://t1:t1@rpi:5672/%2f'))
cha = con.channel()

# Declare the queue
cha.queue_declare(queue="test", durable=True, exclusive=False, auto_delete=False)

# Turn on delivery confirmations
cha.confirm_delivery()
properties=pika.BasicProperties(delivery_mode = 2)

while True:
	cha.basic_publish(exchange='ex',routing_key='',body='msg:%f'%time.time(), properties=properties)
	# time.sleep(1)
