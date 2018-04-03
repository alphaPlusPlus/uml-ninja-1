var express = require("express");
var app     = express();
var path    = require("path");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var index = require('./routes/index');
var dash = require('./routes/dash');

var uri = "mongodb+srv://nimishAras:thesis_project@cluster0-gj7hf.mongodb.net/test";


// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/* Config (request) and (response) */
 // Body parser use JSON data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Support for CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,    Content-Type, Accept");
    next();
});


app.use('/', index);
app.use('/dash', dash);





app.listen(3000);

console.log("Running at Port 3000");