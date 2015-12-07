var apiKey = "key-0a2c407cc22baede21df75b0ff2a2c6c";
var domain = "sandboxd6b9a0e5496e457192b13d9674ed88ec.mailgun.org";
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});

exports.handler = function(event, context) {

        var email = {
                from: 'LeahButton@jakemingolla.github.io',
                to: event.emailAddress,
                subject: event.message,
                html: '<p> ' + event.message + '</p>'
        }

        mailgun.messages().send(email, function(error, body) {
                if (error) return console.error(error);
                context.done(null, 200);
        });
};
