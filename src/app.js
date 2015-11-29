angular.module('Website', [
	'ngRoute',
	'colorpicker.module',
	'ui.bootstrap',
	'websiteControllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/dress', {
		templateUrl: 'views/dress/dress.html',
		controller: 'DressCtrl'
	}).otherwise({redirectTo: '/dress'});
}]);

var controllers = angular.module('websiteControllers', []);