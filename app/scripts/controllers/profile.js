'use strict';

var controllers = angular.module('versed.profile', []);

controllers.controller('ProfileController', ['$scope', function ($scope) {
  $scope.fullname = 'Jon Doe';
}]);
