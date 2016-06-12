(function() {


  var app = angular.module("curtainsOnline");
  var MainController = function($scope, $interval, $location,api,$rootScope) {
  	$rootScope.hideit = true;

  	$scope.toggleModal = function(){

      $scope.toggle="modal";
      $scope.target_modal="#mymodal";
     };


  	$scope.search = function(username) {
      
       $location.path("/user/"+ username);
    };


	$scope.loadImage=function(fimage){
	
		$scope.img= fimage;
	};

	var OnUserComplete = function(data) {

	    $scope.details = data;  // get the json image data

		for (i = 0;i < $scope.details.data.length;i++){
			
			
			
			for(j=0;j<$scope.details.data[i].color_filter.length;j++){
				
				var key = $scope.details.data[i].color_filter[j];

				if(!(key in $scope.color_filter)){ // if key is absent

					$scope.color_filter[key]=[];
					$scope.color_filter[key].push($scope.details.data[i].id);
				}
					
				else{
					var keyLen = $scope.color_filter[key].length;

					$scope.color_filter[key].push($scope.details.data[i].id);
					//alert($scope.color_filter[key].length + key);

				}
					
			}
			for(j=0;j<$scope.details.data[i].pattern_filter.length;j++){
				
				var key = $scope.details.data[i].pattern_filter[j];

				if(!(key in $scope.pattern_filter)){ // if key is absent

					$scope.pattern_filter[key]=[];
					$scope.pattern_filter[key].push($scope.details.data[i].id);
				}
					
				else{
					var keyLen = $scope.pattern_filter[key].length;

					$scope.pattern_filter[key].push($scope.details.data[i].id);
					

				}

			
		}
		var key = $scope.details.data[i].productName;
		

				if(!(key in $scope.style_filter)){ // if key is absent
					
					$scope.style_filter[key]=[];
					$scope.style_filter[key].push($scope.details.data[i].id);
				}
					
				else{
					
					var keyLen = $scope.style_filter[key].length;

					$scope.style_filter[key].push($scope.details.data[i].id);
				
					

				}
	}
		/*for(var keyName in $scope.pattern_filter){        
     var key=keyName ;
     var value= $scope.pattern_filter[keyName ];

  	alert(key)
  	alert(JSON.stringify(value));

	};*/
	
	/*for (var property in $scope.color_filter) 
	{
		
	    if ($scope.color_filter.hasOwnProperty(property)) {
	         $scope.colors.push($scope.color_filter.property);
	    }
	}
	
		alert($scope.colors.l);*/
}
	

    var OnError = function(reason) {
      $scope.error = "could not find data";
    };

	$scope.selectedColors = {
		colors : [],
		pattern :[],
		style:[]
	};
	// clear all functiionality and code for rest of checkboxes


    //$scope.FabSortOrder = "-price";
    $scope.username = "angular";
	
	
	$scope.color_filter ={};
	$scope.colors=[];
	$scope.pattern_filter={};
	$scope.style_filter={};
	
	/*$scope.sample['red']=[];
	$scope.sample['red'][0] = "1";
	$scope.sample['red'][1] = "2";
	//alert($scope.sample['red'][1])*/
	
    //right default image functionality
    api.getJsonDetails().then(OnUserComplete,OnError);
   


  };


  app.controller("MainController", MainController) ;
}());
