'use strict';

var directives = angular.module('versed', []);

directives.directive('error', ['$rootScope', function ($rootScope) {
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
}]);
