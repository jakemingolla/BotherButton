var request = require('request')

var baseUrl = 'https://7k010sw6zf.execute-api.us-west-2.amazonaws.com/prod/';
var apiKey = 'jMzIp2vvqY9AjHTIzBTPJ9myUpmjpF4Wp40QTFA3';

exports.handler = function(event, context) {

        console.log('Running event');

        request.post({
                url: baseUrl + 'facebook',
                headers: {
                        'x-api-key' : apiKey
                },
                body : JSON.stringify({
                        id: event.facebookId,
                        body: event.message,
                        username: event.facebookUsername,
                        password: event.facebookPassword
                })
        }, function(error, response, body) {
                console.log(response.statusCode);
        
        
                request.post({
                        url: baseUrl + 'sms',
                        headers: {
                                'x-api-key' : apiKey
                        },
                        body : JSON.stringify({
                                to: event.to,
                                message: event.message
                        })
                }, function(error, response, body) {
                
                        request.post({
                                url: baseUrl + 'voice',
                                headers: {
                                        'x-api-key' : apiKey
                                },
                                body: JSON.stringify({
                                        to: event.to,
                                        url: event.url
                                })
                        }, function(error, response, body) {
                                console.log(response.statusCode);
                                context.done(null, 'Completed facebook, sms, and voice');
                        })
                })
        });
}
