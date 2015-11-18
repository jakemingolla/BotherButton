// Twilio Credentials
var accountSid = 'AC848e9ac047dad5aef30d86cb580608c3'; 
var authToken = '88e4f2d6ebade1e6b12579cbdca8b3c1'; 
var fromNumber = '+17472325253';


exports.handler = function(event, context) {

        console.log('Running event');

        // Send a voice call to the number provided in the event data.
        // End the lambda function when the send function completes.
        sendCall(event.to, event.url,
                 function(status) {
                         context.done(null, status);
                 }
        );
}

// Sends a voie message using the Twilio API
// PARAMETERS:
//      to: Phone number to message.
//      url: Url of the TwiML data for the call
//      completedCallback(status): Callback for satus code once it has completed.
function sendCall(to, url, completedCallback) {

        var client = require('twilio')(accountSid, authToken);

        client.makeCall({
                from: fromNumber,
                to: to,
                url: url
        }, function(err, responseData) {
                console.log(responseData);
                completedCallback('Voice call completed!');
        });

}
