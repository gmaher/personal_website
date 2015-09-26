var express = require('express'),
	morgan  = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function(){
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	app.set('views', './views');
	app.set('view engine', 'jade');

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	require('../routes/routes.js')(app)

	app.use(express.static('./client'));

	return app
};