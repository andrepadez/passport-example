var User = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config');

var callback = function(token, refreshToken, profile, done){
    process.nextTick(function(){
        User.findOne({'facebook.id': profile.id}, function(err, user){
            if(err){ return done(err); }

            if(user){ return done(null, user); }

            var newUser = new User();
            newUser.facebook.id = profile.id;
            newUser.facebook.token = token;
            newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
            newUser.facebook.email = profile.emails && profile.emails[0].value;

            newUser.save(function(err){
                if(err){ throw err; }
                return done(err, newUser);
            });
        });  
    });
};


module.exports = new FacebookStrategy(config.facebookAuth, callback);
