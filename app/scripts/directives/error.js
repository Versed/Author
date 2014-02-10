'use strict';

var directives = angular.module('versed.error', []);

directives.directive('error', function ($rootScope) {
  return {
    restrict: 'E',
    template: '<div ng-show="isError"> Error! </div>',
    link: function(scope) {
      $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        scope.isError = true;
        console.log('routeChangeError', event, current, previous, rejection);
      });
    }
  };
});
