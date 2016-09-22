#!/usr/bin/env python
# -*- coding: utf-8 -*-



import time
import math
import multiprocessing
from multiprocessing import Process, Value

def pf(val):
	for i in range(10):
		time.sleep(10)
		with val.get_lock():
			val.value += 1
			print val.value

if __name__ == '__main__':
	manager = multiprocessing.Manager()
	v = Value('i',0)
	ps = [Process(target=pf, args=(v,)) for _ in range(10)]
	for p in ps:
		p.start()
	for p in ps:
		p.join()





