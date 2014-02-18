'use strict';

var services = angular.module('versed.services.books', ['ngResource']);

services.factory('Books', ['$resource', function($resource) {
  return $resource('books.json', {id: '@id'});
}]);
