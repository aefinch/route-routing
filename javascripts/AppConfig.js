app.config(function($routeProvider){
	$routeProvider
	.when('/highway/:highway', {
		templateUrl: 'partials/highway.html',
		controller: 'HwyCtrl'
	})
	// .when('/highway/:highway', {
		// templateUrl: 'partials/highway.html',
		// controller: 'HwyCtrl'
	// })
	.otherwise('/highway/route66');
});
