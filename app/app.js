'use strict';

angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
    templateUrl: 'views/home-template.html',
    controller: 'HomeCtrl'
  }).when('/about', {
    templateUrl: 'views/about-template.html',
    controller: 'AboutCtrl'
  }).otherwise({redirectTo: '/home'}); 
    
}]);
