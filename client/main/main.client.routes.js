angular.module('main').config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl: 'main/main.jade'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);