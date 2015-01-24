var User = require('../models/user');

module.exports = function(passport){

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    var SignupStrategy = require('./local-signup');
    passport.use('local-signup', SignupStrategy);

};
