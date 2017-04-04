#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2015-05-01 14:04:09
# @Author  : Your Name (you@example.org)
# @Link    : http://example.org
# @Version : $Id$

import os
import Image

xml_tpl = '''<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
  <!-- auto gen -->
  <item android:drawable="@drawable/{{name}}_s" android:state_checked="true"/>
  <!--
  <item android:drawable="@drawable/{{name}}_s" android:state_pressed="true"/>
  <item android:drawable="@drawable/{{name}}_s" android:state_activated="true"/>
  <item android:drawable="@drawable/{{name}}_s" android:state_selected="true"/>
  -->
  <item android:drawable="@drawable/{{name}}_n"></item>
</selector>
'''
os.chdir("D:\\MyDoc\\DO\\eclipse\\ADT\\HZSZ\\res")


color_dic = {
	(255,255,255): (62,62,62),
	(62,62,62): (255,255,255),

	(51,197,122): (37,185,109),
	(37,185,109): (51,197,122),


	# 拍照
	(101,109,120): (55,198,116),	# 灰->绿
	(55,198,116): (101,109,120),
}

def tran(fn, sfn):
	img = Image.open(fn)
	w,h = img.size
	for n in xrange(w):
		for m in xrange(h):
			r,g,b,a = img.getpixel((n,m))
			sc = (r,g,b)
			if sc in color_dic:
				t = color_dic[sc]
				img.putpixel((n,m), (t[0],t[1],t[2], a))
	print img.size
	img.save(sfn)

def do(root,name):
	fn = os.path.join(root,name)
	sfn = None
	selfn = None
	nname = None

	if '_s.' in fn:
		sfn = fn.replace('_s.', '_n.')
		selfn = fn.replace('_s.png', '.xml').replace('_s.9.png', '.xml')
		nname = name.replace('_s.png', '.xml').replace('_s.9.png', '.xml')
	elif '_n.' in fn:
		sfn = fn.replace('_n.', '_s.')
		selfn = fn.replace('_n.png', '.xml').replace('_n.9.png', '.xml')
		nname = name.replace('_n.png', '').replace('_n.9.png', '')
	if not sfn:
		return
	if not os.path.isfile(sfn):
		tran(fn, sfn)
		print 'png: %s'%sfn
	if not os.path.isfile(selfn):
		xml = xml_tpl.replace("{{name}}", nname)
		with open(selfn, "w+") as fo:
			fo.write(xml)
		print 'xml: %s'%selfn




def dodir(root):
	for f in os.listdir(root):
		fn = os.path.join(root,f)
		if os.path.isfile(fn):
			if fn.endswith(".png"):
				do(root, f)
		else:
			dodir(fn)

dodir(".")
