angular.module('main').config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl: 'partials/main/main.jade',
				controller: 'mainCtrl'
			}).
			when('/blog',{
				templateUrl: '/partials/blog/blog.jade',
				controller: 'blogCtrl'
			}).
			when('/research',{
				templateUrl: '/partials/research/research.jade',
				controller: 'researchCtrl'
			}).
			when('/resume',{
				templateUrl: '/partials/resume/resume.jade',
				controller: 'resumeCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);