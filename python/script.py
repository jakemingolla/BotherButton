#!/usr/bin/env python
# -*- coding: utf-8 -*-

import cookielib
import urllib2
import urllib

class Acc:
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

        def login(self):
                try:
                        params = urllib.urlencode({"email" : "swerge.test@gmail.com", "pass" : "X8dtnrpg", "login" : "Log+In"})
                        req = urllib2.Request('http://m.facebook.com/login.php?m=m&refsrc=m.facebook.com%2F', params, self.headers)
                        res = self.opener.open(req)
                        html =  res.read()

                except urllib2.HTTPError, e:
                        print e.msg
                except urllib2.URLError, e:
                        print e.reason[1]
                return False;

        def fetch(self, url):
                req = urllib2.Request(url, None, self.headers)
                res = self.opener.open(req)
                return res.read()
        
        def message(self):
                url = "http://m.facebook.com/messages/send/?icm=1&refid=12/"

                data = urllib.urlencode({
                        "body": "ayy lmao",
                        "charset_test" : "€,´,€,´,水,Д,Є",
                        "csid" : "67a3d346-59b6-48c2-8fcf-5560933555e7",
                        "cver" : "legacy",
                        "fb_dtsg" : "AQFk20hQGKPL",
                        "ids[1123620538]": "1123620538",
                        "send" : "Send",
                        "tids" : "mid.1446084608737:29b8102f36cf099c65",
                        "wwwupp" : "V3"
                })

                req = urllib2.Request(url, data, self.headers)
                res = self.opener.open(req)
                html = res.read()

                return html

bla = Acc()
bla.login()
html = bla.fetch("https://m.facebook.com/messages/read/?tid=mid.1446084608737%3A29b8102f36cf099c65")
html2 = bla.message()
print html2
