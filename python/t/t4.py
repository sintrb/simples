#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2016-09-10 15:05:23
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$
import sys  
sys.setrecursionlimit(1000000)
import os
def fsort(arr):
	return [] if not arr else fsort([a for a in arr[1:] if a<arr[0]])+[arr[0]]+fsort([a for a in arr[1:] if a>=arr[0]])

lst = range(10000)

import timeit
fsort(lst)