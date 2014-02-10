'use strict';

var controllers = angular.module('versed', []);

controllers.controller('LessonCtrl', ['$scope', function ($scope) {
  $scope.lessons = [
    {
      title: 'intro',
      difficulty: 'beginner'
    },
    {
      title: 'alphabet one',
      difficulty: 'beginner'
    },
    {
      title: 'alphabet two',
      difficulty: 'beginner'
    },
    {
      title: 'alphabet three',
      difficulty: 'beginner'
    }
  ];
}]);
