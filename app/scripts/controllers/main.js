'use strict';

var controllers = angular.module('versed.main', []);

controllers.controller('MainController', ['$scope', 'Books', function ($scope, Books) {
  $scope.books = Books.get();
}]);
