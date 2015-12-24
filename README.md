# Bother Button

**Jake Mingolla**

**October 2015 - December 2015**

**Category: General Backend Programming**

**Language(s): Node.js**

### About

This is the implementation of my birthday present for my girlfriend who often noted I was less than prompt in getting back to her after she tried to get in contact with me. Sometimes I wouldn't have my phone on my so I would miss a text message but I had my computer nearby so sending me a Facebook message would have worked. In order to cover all the bases, I created a [BTTN](https://bt.tn/) that when pressed will attempt to contact me through all forms of communication every minute on the minute until pressed again.

The forms of communication it current uses are:
- SMS (*using Twilio*)
- Voice (*using Twilio*)
- Email (*using Mailgun*)
- Facebook (*using facebook-chat-api*)

I also used this project to get familiar with [Amazon Web Services](https://aws.amazon.com/) (AWS), most notably their [Lambda](https://aws.amazon.com/lambda/) and [API-Gateway](https://aws.amazon.com/api-gateway/) services. Using these services eliminated the need to set up or scale servers to meet my needs - as long as I stay under the 1 million requests per month limit for AWS it will automatically serve the endpoints for my API.

Each of the forms of communication lives within its own Lambda function handler which is pointed to as a method within API Gateway. Each project (as well as any node_modules as dependencies) can be compressed into a .zip archive and uploaded to AWS for its respective Lambda function. These separate modules can either be used as stand-alone endpoints for any future projects needing access to the various forms of communication or be linked together using the "linker" module which hits all endpoints at once.

A separate [Heroku](https://dashboard.heroku.com/) web server runs a cronjob to monitor the state of the service. Whenever it gets toggled to on, every minute it will hit my API Gateway URL with my AWS secret credential key as well as all of the POST data payload to send each Lambda handler through the linker.

The BTTN, when pressed, simply toggles the state within the Heroku web server to kick off the whole project. This allows it to turn it both on and off without having to deal at all with the AWS backend.

### Security Note

As you can easily see in the source code, I have done essentially nothing to hide security credentials or API keys in any of the files. In a future version, I will consolidate the files necessary into configuration properties to hide them from mean people. In the meantime if you want to steal my free developer account keys for Twilio and Mailgun or even log in to my placeholder Facebook account, honestly go right ahead.

### To Dos
- Hide security information
- Make each service unable to send any forms of communication during specific times (i.e. when I have class)
- Prevent services that have already reached their monthly allowances from being called. For example, my Mailgun account is only allowed to send 300 emails a month. While I am pretty sure these numbers will never get reached (as 300 emails amounts to the button being left on for 5 hours) it remains a good practice.

### Dependencies
- [BTTN](https://bt.tn/)
- [Node.js](https://nodejs.org/en/) v.4.2.3
- [Mailgun](http://www.mailgun.com/) - Transactional Email API for Developers
- [facebook-chat-api](https://www.npmjs.com/package/facebook-chat-api)
- [Twilio API for Node.js](https://www.twilio.com/docs/node/install)