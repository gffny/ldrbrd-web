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
			when('/course', {
				templateUrl: 'app/templates/course-overview.html',
				controller: 'CourseCtrl'
			}).
			when('/course/:courseId', {
				templateUrl: 'app/templates/course-detail.html',
				controller: 'CourseCtrl'
			}).
			when('/scorecard/', {
				templateUrl: 'app/templates/scorecard-overview.html',
				controller: 'ScorecardCtrl'
			}).
			when('/scorecard/:scorecardId', {
				templateUrl: 'app/templates/scorecard-detail.html',
				controller: 'ScorecardCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
		}]);