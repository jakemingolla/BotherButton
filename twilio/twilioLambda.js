// Twilio Credentials
var accountSid = 'AC848e9ac047dad5aef30d86cb580608c3'; 
var authToken = '88e4f2d6ebade1e6b12579cbdca8b3c1'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
exports.handler = function(event, context) {

        client.messages.create({  
             to: "+16173122509",
             from: "+17472325253",    
             body: "FUCK TOAST"
        }, function(err, message) { 
                if (!err) {
                        console.log("FUCK TOAST");
                } else {
                        console.log(err);
                }
        });
        context.succeed("SENT MESSAGE TO JAKE");
};
