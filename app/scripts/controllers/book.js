'use strict';

var controllers = angular.module('versed.books', []);

controllers.controller('BookCtrl', ['$scope', function ($scope) {
  $scope.books = [
    {
      title: 'Big Journey',
      difficulty: 'beginner'
    },
    {
      title: 'Dream Land',
      difficulty: 'beginner'
    },
    {
      title: 'Aventure',
      difficulty: 'beginner'
    },
    {
      title: 'Be Nice To Others',
      difficulty: 'beginner'
    }
  ];
}]);
