#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import cookielib
import urllib
import urllib2

def lambda_handler(event, context):
    jar = cookielib.CookieJar()
    cookie = urllib2.HTTPCookieProcessor(jar)
    opener = urllib2.build_opener(cookie)
    
    headers = {
        "User-Agent" : "Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.8.1.14) Gecko/20080609 Firefox/2.0.0.14",
        "Accept" : "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,text/png,*/*;q=0.5",
        "Accept-Language" : "en-us,en;q=0.5",
        "Accept-Charset" : "ISO-8859-1",
        "Content-Type" : "application/x-wwww-form-urlencoded",
        "Host" : "m.facebook.com"
    }

    login_data = {
        "email" : "swerge.test@gmail.com",
        "pass" : "X8dtnrpg",
        "login" : "Log+In"
    }
    
    login_url = "http://m.facebook.com/login.php?m=m&refsrc=m.facebook.com%2F"
    
    params = urllib.urlencode(login_data)
    req = urllib2.Request(login_url, params, headers)
    res = opener.open(req)
    
    middle_url = "https://m.facebook.com/messages/read/?tid=mid.1446084608737%3A29b8102f36cf099c65"
    
    req = urllib2.Request(middle_url, None, headers)
    res = opener.open(req)
    
    message_url = "http://m.facebook.com/messages/send/?icm=1&refid=12/"
    
    message_data = {
        "body": "ayy lambdao",
        "charset_test" : "ÃÂ¢ÃÂÃÂ¬,ÃÂÃÂ´,ÃÂ¢ÃÂÃÂ¬,ÃÂÃÂ´,ÃÂ¦ÃÂ°ÃÂ´,ÃÂÃÂ,ÃÂÃÂ",
        "csid" : "67a3d346-59b6-48c2-8fcf-5560933555e7",
        "cver" : "legacy",
        "fb_dtsg" : "AQFk20hQGKPL",
        "ids[1123620538]": "1123620538",
        "send" : "Send",
        "tids" : "mid.1446084608737:29b8102f36cf099c65",
        "wwwupp" : "V3"
    }
    
    params = urllib.urlencode(message_data)
    req = urllib2.Request(message_url, params, headers)
    res = opener.open(req)
