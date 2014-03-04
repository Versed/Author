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
        books: Books.query()
      });
    }));

    it('should populate scope with list of books', function() {
      expect(Books.query().length).toEqual(3);
    });
  });
});
