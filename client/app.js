var mainAppModuleName = 'meanServer';

var mainAppModule = angular.module(mainAppModuleName, []);

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainAppModuleName]);
});