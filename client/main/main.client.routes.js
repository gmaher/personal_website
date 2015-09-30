angular.module('main').config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl: 'main/main.jade',
				controller: 'mainCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);