'use strict';

describe('Controllers', function () {

  beforeEach(module('versed'));

  it('should be true', function() {
    expect(true).toEqual(true);
  });

  describe('MainController', function() {
    var MainController, scope, Books, $save;

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      $save = jasmine.createSpy('$save');
      Books = function Books() {
        return {
          $save: $save
        };
      };
      Books.get = function get() {
        return [
          {name: 'Books 1', difficulty: 'beginner'},
          {name: 'Books 2', difficulty: 'beginner'},
          {name: 'Books 3', difficulty: 'beginner'}
        ];
      };
      MainController = $controller('MainController', { $scope: scope, books: Books });
    }));

    it('should populate scope with list of books', function() {
      expect(scope.books.length).toEqual(3);
    });
  });
});
