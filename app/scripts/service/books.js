'use strict';

var services = angular.module('versed.bookService', []);

services.factory('Books', [function() {
  return {
    get: function() {
      return [
        {
          title: 'Big Journey',
          difficulty: 'beginner'
        },
        {
          title: 'Dream Land',
          difficulty: 'beginner'
        },
        {
          title: 'Aventure',
          difficulty: 'beginner'
        },
        {
          title: 'Be Nice To Others',
          difficulty: 'beginner'
        }
      ];
    }
  };
}]);
