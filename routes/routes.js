module.exports = function(app){
	app.get('/', function(req,res){
		res.render('index', {title: 'index page', message: 'hello world!'});
	});

	//route for rendering jade partials from angular
	app.get('/partials/*', function(req,res){
		res.render('../client/' + req.params[0]);
	})
};