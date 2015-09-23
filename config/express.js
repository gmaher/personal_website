var express = require('express');

module.exports = function(){
	var app = express();
	require('../routes/routes.js')(app)
	return app
};