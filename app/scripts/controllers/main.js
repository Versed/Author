'use strict';

var controllers = angular.module('versed.main', ['versed.services.books']);

controllers.controller('MainController', ['$scope', 'Books', function ($scope, Books) {
  Books.query(function(response) {
    $scope.books = response;
  });
}]);
