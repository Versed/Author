'use strict';

var controllers = angular.module('versed.controllers', []);

controllers.controller('BookCtrl', function ($scope) {
  $scope.book = 'Book1';
});