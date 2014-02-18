'use strict';

describe('Controllers', function () {
  var MainController;
  beforeEach(module('versed'));

  it('should be true', function() {
    expect(true).toEqual(true);
  });

  describe('MainController', function() {
    var scope, Books, $save;

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
      MainController = $controller('MainController', { $scope: scope, books: Books.get() });
    }));

    it('should populate scope with list of books', function() {
      var result = MainController.books;
      expect(result.length).toEqual(3);
    });
  });
});
