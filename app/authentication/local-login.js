var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

var callback = function(req, email, password, done){
    User.findOne({'local.email': email}, function(err, user){
        if(err){ return done(err); }
        
        if(!user){
            return done(null, false, req.flash('loginMessage', 'No user found'));
        }

        if( !user.validPassword(password) ){
            return done(null, false, req.flash('loginMessage', 'Wrong Password'));
        }
        
        return done(null, user);
    });
};

module.exports = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, callback);
