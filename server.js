var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDb = require('./config/db')['dev'];
console.log(configDb);


var port = process.env.PORT || 8080;
var app = express();
mongoose.connect(configDb.url, function(err){
    console.log(err || 'connected');
})
