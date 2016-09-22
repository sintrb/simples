import urllib
def getImage(imList):  
    print 'Downloading...'  
    name = 1;  
    for imgurl in imList:  
        urllib.urlretrieve(imgurl, '%s.jpg' % name)  
        name += 1  
    print 'Got ', len(imList), ' images!' 


getImage([
	'http://avatar.csdn.net/A/C/5/1_xin_yu_xin.jpg','https://sf-sponsor.b0.upaiyun.com/664f4725a80c3545216d4c3e17c62a66.jpeg'
	])