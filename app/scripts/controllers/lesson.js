'use strict';

var controllers = angular.module('versed.lessons', []);

controllers.controller('LessonController', ['$scope', function ($scope) {
  $scope.lessons = [];
}]);
