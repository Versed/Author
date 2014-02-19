'use strict';

var controllers = angular.module('versed.books', []);

controllers.controller('BookController', ['$scope', function ($scope) {
  $scope.books = [];
}]);
