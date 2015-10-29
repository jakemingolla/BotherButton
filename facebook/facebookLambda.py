from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

def handler(event, context):
    TIMEOUT = 5
    usr = "swerge.test@gmail.com"
    pw = "X8dtnrpg"

    driver = webdriver.Firefox()
    driver.get("http://www.facebook.com")
    elem = driver.find_element_by_id("email")
    elem.send_keys(usr)
    elem = driver.find_element_by_id("pass")
    elem.send_keys(pw)
    elem.send_keys(Keys.RETURN)

    sleep(TIMEOUT)
    driver.get("https://www.facebook.com/messages/jacob.mingolla")
    elem = driver.find_element_by_name("message_body")
    elem.send_keys("fuck you work on algorithms")
    elem.send_keys(Keys.RETURN)
    sleep(TIMEOUT)

    driver.close()
