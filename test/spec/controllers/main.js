'use strict';

describe('Controllers', function () {
  beforeEach(module('versed'));

  var MainController, scope, $save, Books;

  describe('MainController', function() {
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      $save = jasmine.createSpy('$save');

      Books = function Books() {
        return {
          $save: $save
        };
      };
      Books.query = function query() {
        return [
          {name: 'Books 1', difficulty: 'beginner'},
          {name: 'Books 2', difficulty: 'beginner'},
          {name: 'Books 3', difficulty: 'beginner'}
        ];
      };
      MainController = $controller('MainController', {
        $scope: scope,
        Books: Books
      });
    }));

    it('should populate scope with list of books', function() {
      expect(scope.books.length).toBe(3);
    });
  });
});
