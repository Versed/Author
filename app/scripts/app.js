'use strict';

var app = angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider',
 function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('books', {
      url: '/books',
      templateUrl: 'views/books.html',
      controller: 'BookCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html'
    })
    .state('lessons', {
      url: '/lessons',
      templateUrl: 'views/lesson.html',
      controller: 'LessonCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });

  $urlRouterProvider.otherwise('/404');
  // $locationProvider.html5Mode(true).hashPrefix('!');
}]);
