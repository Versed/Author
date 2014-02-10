'use strict';

var app = angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'versed.main',
  'versed.books',
  'versed.error'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
 function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('main.books', {
      url: '/books',
      templateUrl: 'views/books.html',
      controller: 'BookCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html'
    })
    .state('main.lessons', {
      url: '/lessons',
      templateUrl: 'views/lesson.html',
      controller: 'LessonCtrl',
      parent: 'main'
    })
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });

  $urlRouterProvider.otherwise('/404');
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);
