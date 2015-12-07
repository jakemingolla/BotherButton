var login = require("facebook-chat-api");
 
exports.handler = function(event, context) {
        login({email: event.username, password: event.password}, function callback (err, api) {
                if(err) return console.error(err);
                var id =  event.id;
                var body = event.body;
                api.sendMessage(body, id, function(err, messageInfo) {
                        if(err) return console.error(err);
                        context.done(null, 200);
                });
        });
};
