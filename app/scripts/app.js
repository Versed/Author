'use strict';

angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
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
