'use strict';

/* App Module */
var ldrbrdApp = angular.module('ldrbrdApp', [
  'ngRoute',
  'ldrbrdCtrls'
]);

ldrbrdApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/profile', {
				templateUrl: 'app/templates/profile-detail.html',
				controller: 'ProfileCtrl'
			}).
			when('/profile/:phoneId', {
				templateUrl: 'app/templates/profile-detail.html',
				controller: 'ProfileCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
		}]);