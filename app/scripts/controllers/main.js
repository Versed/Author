'use strict';

var controllers = angular.module('versed.main', []);

controllers.controller('MainCtrl', function ($rootScope) {
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
    console.log('routeChangeError', event, current, previous, rejection);
  });
});
