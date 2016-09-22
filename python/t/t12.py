import logging
FORMAT = ('%(levelname)-10s %(asctime)s %(funcName)-35s %(lineno)-5d: %(message)s')
logging.basicConfig(format = FORMAT)
logging.error("hello")

def x():
	logging.error("ut x")

x()


