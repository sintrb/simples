import json
from selenium import webdriver

driver = webdriver.PhantomJS()
driver.set_window_size(1200, 900)

driver.get(r'http://www.baidu.com')

# driver.get_screenshot_as_png()
driver.save_screenshot(r'a.png')
with open('cookies.json', json.dumps(driver.get_cookies()))
driver.close()
print 'ok'

