'use strict';

angular.module('myApp')
.controller('HomeCtrl', ['$scope','RegisterService', function($scope, RegisterService) {
    $scope.register = function() {
        $scope.payload = {
            name: $scope.username,
            password: $scope.password
        }
        RegisterService.register($scope.payload).then(function(response) {
			//logic with response
		}, function(err) {
			//logic with error
		});
    }
}]);