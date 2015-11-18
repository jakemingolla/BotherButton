// Twilio Credentials
var accountSid = 'AC848e9ac047dad5aef30d86cb580608c3'; 
var authToken = '88e4f2d6ebade1e6b12579cbdca8b3c1'; 
var fromNumber = '+17472325253';
var toNumber = '+16173122509';
var url = 'https://raw.githubusercontent.com/jakemingolla/bthr/master/voice/call.xml';

var client = require('twilio')(accountSid, authToken)

client.makeCall({
        from: fromNumber,
        to: toNumber,
        url: url
}, function(err, responseData) {
        console.log(responseData);
});
