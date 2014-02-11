'use strict';

var services = angular.module('versed.bookService', ['ngResource']);

services.factory('Books', ['$resource', function($resource) {
  return $resource('books.json', {id: '@id'});
}]);
