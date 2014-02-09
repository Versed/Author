'use strict';

var controllers = angular.module('versed.controllers', []);

controllers.controller('LessonCtrl', function ($scope) {
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
});
