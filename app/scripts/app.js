'use strict';

var app = angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'versed.main',
  'versed.books'
]);

app.config(function ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/home',
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
    });

  // $urlRouterProvider.otherwise('/');
});
