'use strict';

/* Controllers */
var ldrbrdCtrls = angular.module('ldrbrdCtrls', []);

ldrbrdCtrls.controller('ProfileCtrl', ['$scope', '$http',
		function ($scope, $http) {
			$http.get('app/data/digest.json').success(function(data) {
				$scope.profile = data.golferProfile;
			});
		}]);
