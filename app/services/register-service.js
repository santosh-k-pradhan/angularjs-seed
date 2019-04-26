'use strict';

angular.module('myApp') 
.service('RegisterService', ['$q','$http', function($q, $http) {
	
	var register = function(payload) {
		return $q(function(resolve, reject) {
		  
			$http({
				method: 'POST', 
				url: 'http://localhost:8080/api/signup',
				data: payload,
				headers: {
                    'Content-Type': 'application/json'
                }
			}).then(function(result){
				if (result.data.success) {
				  resolve(result.data.msg);
				} else {
				  reject(result.data.msg);
				}
			});
			
		});
	};
 
	return {
		register: register
	};
	
}])