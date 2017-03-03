var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lhp-contacts');

mongoose.Promise = global.Promise;

var routes = require('./routes/index');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

var port = (process.env.PORT || '8007');

app.listen(port, function () {
  console.log('ok! On localhost:' + port);
});