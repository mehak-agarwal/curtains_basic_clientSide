(function(){
  
  var app=angular.module("curtainsOnline",["ngRoute","checklist-model"]); // ngRoute is another module that my module needs
  
  //inside confiruation fucntion we define our routes
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl : "main.html",
        controller  : "MainController"
        
      })
      .when("/user/:username",{
        templateUrl : "user.html",
        controller : "UserController"
      })
      .when("/repo/:username/:reponame",{
        templateUrl : "repo.html",
        controller  : "RepoController"
      })
      .when("/style",{
        templateUrl : "style.html",
        controller  : "MainController"
      })
      
	
          
    
  });
  
}());
