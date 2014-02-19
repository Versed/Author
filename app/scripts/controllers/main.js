'use strict';

var controllers = angular.module('versed.main', ['versed.services.books', 'versed.services.lessons']);

controllers.controller('MainController', ['$scope', 'Books', 'Lessons', function ($scope, Books, Lessons) {
  Books.query(function(response) {
    $scope.books = response;
  });

  Lessons.query(function(response) {
    $scope.lessons = response;
  });
}]);
