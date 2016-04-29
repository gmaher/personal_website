angular.module('main').controller('mathCtrl', ['$scope', '$timeout', function($scope,$timeout){
		$timeout(MathJax.Hub.Queue(["Typeset", MathJax.Hub]),0)
	}
]);