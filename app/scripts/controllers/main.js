'use strict';

var controllers = angular.module('versed', []);

controllers.controller('MainCtrl', ['$scope', 'Books', function ($scope, Books) {
  $scope.books = Books.get();
}]);
