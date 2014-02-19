'use strict';

var services = angular.module('versed.services.lessons', ['ngResource']);

services.factory('Lessons', ['$resource', function($resource) {
  return $resource('/lib/lessons.json', {});
}]);
