'use strict';

angular.module('versed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'versed.controllers'
])

.config(function ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/home',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('books', {
      url: '/books',
      templateUrl: 'views/books.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html'
    })
    .state('main.lessons', {
      url: '/lesson/:id',
      templateUrl: 'views/lesson.html',
      controller: 'LessonCtrl',
      parent: 'main'
    })
    .state('main.challenge', {
      url: '/challenge/:id',
      templateUrl: 'views/challenge.html',
      controller: 'BookCtrl'
    });

  // $urlRouterProvider.otherwise('/');
});
