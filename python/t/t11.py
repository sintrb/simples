#!/usr/bin/env python

import os, time

import pika

con = pika.BlockingConnection(pika.URLParameters('amqp://t1:t1@192.168.1.110:5672/%2f'))
cha = con.channel()

# Turn on delivery confirmations
cha.confirm_delivery()

def on_msg(ch, method, properties, body):
	# print "m:%r p:%r r: %r" % (method,properties,body)
	# time.sleep(1)
	ch.basic_ack(delivery_tag = method.delivery_tag)

cha.basic_consume(on_msg, queue='test', no_ack=False,exclusive=False)

cha.start_consuming()

