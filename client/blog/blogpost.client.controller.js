angular.module('main').controller('blogPostCtrl',
	['$scope','$routeParams', function($scope, $routeParams){
		$scope.message = 'hello scope';

		var postparam = $routeParams.postparam;

		posts = {}
		posts['firstpost'] = {
			title: "My first blog post!",
			postContent: [
			{type: 'text',
			content: "Content of my firstblogpost"},
			{type: 'image',
			path: 'meanstack.png'}
			]
		}

		$scope.post = posts[postparam]
	}
]);