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
			when('/blog/firstpost',{
				templateUrl: '/partials/blog/blog.firstpost.jade'
			}).
			when('/blog/tensorflow',{
				templateUrl: '/partials/blog/blog.tensorflow.jade',
				controller: 'mathCtrl'
			}).
			when('/blog/tensorboard',{
				templateUrl: '/partials/blog/blog.tensorboard.jade',
				controller: 'mathCtrl'
			}).
			when('/research',{
				templateUrl: '/partials/research/research.jade',
				controller: 'researchCtrl'
			}).
			when('/resume',{
				templateUrl: '/partials/resume/resume.jade',
				controller: 'resumeCtrl'
			}).
			when('/projects',{
				templateUrl: '/partials/projects/projects.jade',
				controller: 'projectsCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);