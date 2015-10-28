// https://gist.github.com/stevebowman/7cff9dd80b227c899728I 

console.log('Loading event');

// Twilio Credentials
var accountSid = 'AC848e9ac047dad5aef30d86cb580608c3'; 
var authToken = '88e4f2d6ebade1e6b12579cbdca8b3c1'; 
var fromNumber = '+17472325253';

// Twilio
var twilioHost = 'api.twilio.com';
var twilioPath = '/2010-04-01/Accounts/' + accountSid + '/Messages.json';

var https = require('https');
var queryString = require('querystring');

// Lambda function to export
exports.handler = function(event, context) {

        console.log('Running event');

        // Send an sms message to the number provided in the event data.
        // End the lambda function when the send function completes.
        sendSMS(event.to, event.message,
                function(status) {
                        context.done(null, status);
                }
        );
};

// Sends an SMS message using the Twilio API
// PARAMETERS:
//      to: Phone number to message.
//      body: Message body.
//      completedCallback(status) : Callback for status code once it has completed.
function sendSMS(to, body, completedCallback) {
        
        // The SMS message to send.
        var message = {
                To: to,
                From: fromNumber,
                Body: body
        };

        var messageString = queryString.stringify(message);

        // Options and headers for an HTTP request
        var options = {
                host: twilioHost,
                port: 443,
                path: twilioPath,
                method: 'POST',
                headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': Buffer.byteLength(messageString),
                        'Authorization': 'Basic ' + new Buffer(accountSid + ':' + authToken).toString('base64')
                }
        };

        // Set up the HTTP request
        var request = https.request(options, function(response) {

                response.setEncoding('utf-8');

                // Collect response data as it comes back
                var responseString = '';
                response.on('data', function(data) {
                        responseString += data;
                });

                // After the message returns, log the message
                // received from twilio
                response.on('end', function() {
                        console.log('Twilio Response: ' + responseString);
                        completedCallback('API reqest sent successfully.');
                });
        });

        // Handler function for HTTP errors
        request.on('error', function(err) {
                console.error('HTTP error: ' + err.message);
                completedCallback('API request completed with error(s).');
        });

        // Send the HTTP request to the Twilio API
        // Log the message we are sending.
        console.log('Twilio API call: ' + messageString);
        request.write(messageString);
        request.end();
}
