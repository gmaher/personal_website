var mainAppModuleName = 'meanServer';

var mainAppModule = angular.module(mainAppModuleName, ['ngRoute', 'main']);

mainAppModule.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');

	//$locationProvider.html5Mode(true);
	}
]);

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainAppModuleName]);
});