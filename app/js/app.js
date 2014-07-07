'use strict';

/* App Module */
var ldrbrdApp = angular.module('ldrbrdApp', [
  'ngRoute',
  'ldrbrdCtrls'
]);




ldrbrdApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			/* Home */
			when('/home', {
				redirectTo: '/'
			}).
			when('/', {
				templateUrl: 'app/templates/home.html',
				controller: 'HomeCtrl'
			}).
			/* Login/Logout/Register */
			when('/login', {
				templateUrl: 'app/templates/auth/login.html',
				controller: 'AuthCtrl'
			}).
			when('/logout', {
				templateUrl: 'app/templates/auth/logout.html',
				controller: 'AuthCtrl'
			}).
			when('/register', {
				templateUrl: 'app/templates/auth/register.html',
				controller: 'RegisterCtrl'
			}).
			/* Profile */
			when('/profile', {
				templateUrl: 'app/templates/profile/profile-detail.html',
				controller: 'ProfileCtrl'
			}).
			when('/profile/:profileId', {
				templateUrl: 'app/templates/profile/profile-detail.html',
				controller: 'ProfileCtrl'
			}).
			/* Competition */
			when('/competition/:competitionId', {
				templateUrl: 'app/templates/competition/competition-detail.html',
				controller: 'CompetitionCtrl'
			}).
			when('/competition/create', {
				templateUrl: 'app/templates/competition/competition-create.html',
				controller: 'CompetitionCtrl'
			}).
			when('/competition/results/:competitionId', {
				templateUrl: 'app/templates/competition/competition-results.html',
				controller: 'CompetitionCtrl'
			}).
			when('/competition/leaderboard/:competitionId', {
				templateUrl: 'app/templates/competition/competition-leaderboard.html',
				controller: 'LeaderboardCtrl'
			}).
			/* Courses */
			when('/course', {
				templateUrl: 'app/templates/course/course-overview.html',
				controller: 'CourseCtrl'
			}).
			when('/course/:courseId', {
				templateUrl: 'app/templates/course/course-detail.html',
				controller: 'CourseCtrl'
			}).
			/* Scorecard */
			when('/scorecard/', {
				templateUrl: 'app/templates/scorecard/scorecard-overview.html',
				controller: 'ScorecardCtrl'
			}).
			when('/scorecard/:scorecardId', {
				templateUrl: 'app/templates/scorecard/scorecard-detail.html',
				controller: 'ScorecardCtrl'
			}).
			/* Search */
			when('search/:queryString', {
				templateUrl: 'app/templates/search/search-results.html',
				controller: 'SearchCtrl'
			}).
 			/* Analysis */
			when('/analysis/', {
				templateUrl: 'app/templates/analysis/analysis-detail.html',
				controller: 'CompetitionCtrl'
			}).
			/* Development Page */
			otherwise({
				redirectTo: '/scorecard/a10af2db-d0ad-4f37-a906-f27aa5d8d35f'
			});
		}]);