var User = require('../models/user');
var signupStrategy = require('./local-signup');
var loginStrategy = require('./local-login');
var facebookStrategy = require('./facebook-strategy');

module.exports = function(passport){

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use('local-signup', signupStrategy);
    passport.use('local-login', loginStrategy);
    passport.use( facebookStrategy );

};
