process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('./config/express');

var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8000
var ip = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0"

app.listen(port, ip);

module.exports = app

console.log('server listening at port ', port, ' IP: ', ip);