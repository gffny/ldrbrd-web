'use strict';

/* Controllers */
var ldrbrdCtrls = angular.module('ldrbrdCtrls', []);

/* Home */
ldrbrdCtrls.controller('HomeCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

		}]);

/* Login/Logout/Register */
ldrbrdCtrls.controller('AuthCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

		}]);

ldrbrdCtrls.controller('RegisterCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {
			var golfer = {
				"firstName": "",
				"lastName": "",
				"profileName": "",
				"city": "",
				"state": "",
				"handicap": ""
			};

			$scope.golfer = golfer;

			$scope.register = function() {
				console.log("register " + $scope.golfer);

				$http.post("#/home", angular.toJson($scope.golfer)).success(function(data) {
					console.log("success "+data);
				}).error(function(data){
					console.log("error "+data);
				});
			}

		}]);

/* Profile */
ldrbrdCtrls.controller('ProfileCtrl', ['$scope', '$http',
		function ($scope, $http) {

			$scope.closeOthersInView = function(view) {
				for(var scorecardKey in view) {
					view[scorecardKey] = false;
				}
				return true;
			}
			/* Toggle Scorecard View */
 			$scope.toggleScorecard = function(scorecardId, index) {
 				$scope.scorecardInView[scorecardId] = $scope.scorecardInView[scorecardId] ? false : $scope.closeOthersInView($scope.scorecardInView);
 			};
			/* Toggle Scorecard View */
 			$scope.toggleFavouriteCourse = function(courseId, index) {
 				$scope.favouriteCourseInView[courseId] = $scope.favouriteCourseInView[courseId] ? false : $scope.closeOthersInView($scope.favouriteCourseInView);
 			};
 			/* Request Golfer Digest */ 
			$http.get('app/data/digest.json').success(function(data) {
				$scope.profile = data.golferProfile;
				// set the scope variables first in case theres a issue in the loops later!
				$scope.scorecardArray = data.lastXScorecardList;
				$scope.favouriteCourseArray = data.favouriteCourseList;
				$scope.scorecardInView = {};
				$scope.favouriteCourseInView = {};
 				for (var i = 0; i < $scope.scorecardArray.length; i++) {
 					$scope.scorecardInView[$scope.scorecardArray[i].id] = false;
 				}
 				 for (var i = 0; i < $scope.favouriteCourseArray.length; i++) {
 					$scope.favouriteCourseInView[$scope.favouriteCourseArray[i].id] = false;
 				}
 			});
		}]);

/* Competition */
ldrbrdCtrls.controller('CompetitionCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

		}]);

ldrbrdCtrls.controller('LeaderboardCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

			$scope.leaderboard = [];

			for(var i=0; i<10; i++) {
				$scope.leaderboard[i] = {
					"pos": i+1,
					"name": "John Gaffney",
					"thru": i+8,
					"toPar": i-6
				};
			};

		}]);

/* Courses */
ldrbrdCtrls.controller('CourseCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

			$scope.abbreviatedView = true;
			$scope.showHoleNote = false;
			$scope.showMouseOverHoleView = false;
			$scope.mohv = {};
			$scope.tableClass=[];

			// $scope.scorecard.course.id ... 7f500b91-cec5-4573-921a-ac2d3c2ca1af
			$http.get('app/data/course-'+$routeParams.courseId+'.json').success(function(courseData) {
				$scope.course = angular.copy(courseData.payload.courseHoleMap[$routeParams.courseId]);
				// setup the mouse over 
				for(var hole in $scope.course) {
					$scope.tableClass[hole] = false;
				}
			});
			//TODO HANDLE FAILUE HERE

			$scope.toogleView = function() {
				$scope.abbreviatedView = $scope.abbreviatedView ? false : true;
				$scope.showMouseOverHoleView = false;
			};

			$scope.toggleHoleView = function(hole, column) {
				$scope.mohv = hole;
				$scope.mohv.holeImageURL = "http://lunar.thegamez.net/golfswing/youtube-golf-lessons/hole-10-bald-cypress-cheraw-golf-course-hole-by-hole-tour-300x506.jpg";
				$scope.tableClass[column] = $scope.tableClass[column] ? false : true;
				$scope.showMouseOverHoleView = $scope.showMouseOverHoleView ? false : true;
			};
		}]);

/* Scorecard */
ldrbrdCtrls.controller('ScorecardCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

			$scope.courseData = {};

 			/* Request Course Data */ 
 			$scope.loadCourseData = function() {
 				// $scope.scorecard.course.id ... 7f500b91-cec5-4573-921a-ac2d3c2ca1af
 				$http.get('app/data/course-7f500b91-cec5-4573-921a-ac2d3c2ca1af.json').success(function(courseData) {
 					$scope.courseData['7f500b91-cec5-4573-921a-ac2d3c2ca1af'] = angular.copy(courseData.payload.courseHoleMap['7f500b91-cec5-4573-921a-ac2d3c2ca1af']);
 				});
 			};

 			/* Request Golfer Digest */ 
			$http.get('app/data/scorecard-'+$routeParams.scorecardId+'.json').success(function(data) {
				$scope.scorecard = angular.copy(data);
				$scope.loadCourseData();
 			});

		}]);

/* Search */
ldrbrdCtrls.controller('SearchCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

		}]);

/* Analysis */
ldrbrdCtrls.controller('AnalysisCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {

		}]);