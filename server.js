var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var env = 'dev';

var configDb = require('./config/db')[env];
require('./app/authentication/passport')(passport);

var port = process.env.PORT || 8080;

var app = express();
app.use(morgan(env));
app.use(cookieParser());
app.use(bodyParser());
app.set('view engine', 'ejs');

//passport
app.use( session( {secret: 'somethingsomethingdarkside'} ) );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( flash() );

require('./app/routes')(app, passport);

mongoose.connect(configDb.url, function(err){
    console.log(err || 'connected to mongoose');
});

app.listen(port, function(){
    console.log('express connected on port ', port);
});
