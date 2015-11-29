controllers.controller('TripWeatherCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.data = $http.get('http://api.wunderground.com/api/' + WUNDER_KEY + '/geolookup/q/37.776289,-122.395234.json');
	var directionService;
	var directionService = new google.maps.DirectionsService();
	$scope.getDirections = function(origin, dest) {
		directionService.route({origin: 'Des Moines, IA'
				, destination: 'Ames, IA', travelMode: google.maps.TravelMode.DRIVING});
	};
	$scope.gdata = $scope.getDirections();
}]);