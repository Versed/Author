'use strict';

var app = angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'versed.controllers'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html'
      })
      .when('/library', {
        templateUrl: 'views/library.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
