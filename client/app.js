var mainAppModuleName = 'meanServer';

var mainAppModule = angular.module(mainAppModuleName, ['ngRoute', 'main']);

mainAppModule.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainAppModuleName]);
});