'use strict';

describe('Controller: MainController', function () {

  beforeEach(module('versed.main'));
  beforeEach(module('ui.router', function($locationProvider) {
    $locationProvider.html5Mode(false);
  }));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should pass test', function () {
    expect(true).toBe(true);
  });
});
