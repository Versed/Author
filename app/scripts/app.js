'use strict';
var app;

app = angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'versed.config',
  'versed.main',
  'versed.books',
  'versed.lessons',
  'versed.error'
]);
