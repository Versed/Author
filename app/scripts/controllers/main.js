'use strict';

var controllers = angular.module('versed.main', ['versed.bookService']);

controllers.controller('MainController', ['$scope', 'Books', function ($scope, Books) {
  $scope.books = Books.get();
}]);
