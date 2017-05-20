app.factory("HwyFactory", function($q, $http){
	let getHighway = () => {
		return $q((resolve, reject) => {
			$http.get('./database/highway.json')
			.then((results) =>{
				resolve(results.data.highways);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	return {getHighway:getHighway};
});