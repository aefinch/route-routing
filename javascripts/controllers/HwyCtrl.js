app.controller("HwyCtrl", function($routeParams, $scope, HwyFactory){
	$scope.highwayName="";
	$scope.highwayDescription="";
	$scope.website="";
	$scope.tagline="";
	let selectedHighway = {};

	HwyFactory.getHighway($routeParams.highway)
	.then((results) => {
		$scope.selectedHighway = results;
		let viewHighway=$routeParams.highway;
		selectedHighway = results[viewHighway];
		$scope.highwayName = selectedHighway.roadName;
		$scope.highwayDescription = selectedHighway.description;
		$scope.website = selectedHighway.website;
		$scope.tagline = selectedHighway.tagline;
	})
	.catch((error) => {
		console.log("getHighway error", error);
	});
});