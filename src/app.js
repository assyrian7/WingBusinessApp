var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();
var router = express.Router();

require('./routes')(router.route('/'));

app.use(bodyParser.json());
app.use(router);
app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(port, function(){
	console.log("Server listening on port:", port);
});