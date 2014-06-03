'use strict';

/* Controllers */
var ldrbrdCtrls = angular.module('ldrbrdCtrls', []);

ldrbrdCtrls.controller('ProfileCtrl', ['$scope', '$http',
		function ($scope, $http) {
			$http.get('app/data/profile.json').success(function(data) {
				$scope.profile = data;
			});
		}]);
