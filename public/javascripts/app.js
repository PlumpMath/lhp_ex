var app = angular.module('learnhebrewpod', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  	.state('home', {
  		url: '/home',
  		templateUrl: 'templates/home.html',
      controller: 'mainCtrl'
  	})
    .state('addnew', {
      url: '/addnew',
      templateUrl: 'templates/addnew.html',
      controller: 'mainCtrl'
    })

	$urlRouterProvider.otherwise('/home');
}]);