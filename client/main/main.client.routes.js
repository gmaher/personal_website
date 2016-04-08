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
			when('/blog/:postparam',{
				templateUrl: '/partials/blog/blogpost.jade',
				controller: 'blogPostCtrl'
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