angular.module('versed.config', []);

app.config(['$stateProvider', '$urlRouterProvider',
 function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('books', {
      url: '/books',
      templateUrl: 'views/books.html',
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html'
    })
    .state('lessons', {
      url: '/lessons',
      templateUrl: 'views/lesson.html',
    })
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });

  $urlRouterProvider.otherwise('/404');
  // $locationProvider.html5Mode(true).hashPrefix('!');
}]);
