import pdfkit

try:
	# pdfkit.from_url('http://google.com', 'out.pdf')
	pdfkit.from_file(r'C:\\Users\\IR-1\\Desktop\\SEC_Example.html', 'out.pdf')
except Exception, why:
    print('Failed: {}'.format(why))