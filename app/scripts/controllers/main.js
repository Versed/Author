'use strict';

var controllers = angular.module('versed.main', []);

controllers.controller('MainCtrl', ['$scope', 'Books', function ($scope, Books) {
  $scope.books = Books.get();
}]);
