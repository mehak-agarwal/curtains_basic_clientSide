(function() {

  var api = function($http) {


   
    var getJsonDetails = function(){

	return $http.get("data.json")
			.then(function(response){return response.data;})	
	};
    

    return {
      
      getJsonDetails : getJsonDetails
        //returns an object
    };
  };

  var module = angular.module("curtainsOnline"); // having reference to the already created module.
  module.factory("api", api); // registering the service


}());
