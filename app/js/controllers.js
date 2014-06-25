'use strict';

/* Controllers */
var ldrbrdCtrls = angular.module('ldrbrdCtrls', []);

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