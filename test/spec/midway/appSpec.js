'use strict';

describe('Midway: Testing Modules', function() {
  describe('App Module:', function() {

    var module;
    beforeEach(function() {
      module = angular.module('versed');
    });

    it('should be registered', function() {
      expect(module).not.toEqual(null);
    });

    describe('Dependencies:', function() {

      var dependencies;
      var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
      };
      beforeEach(function() {
        dependencies = module.value('versed').requires;
      });

      it('should load some dependencies', function() {
        expect(hasModule('versed.main')).toBe(true);
        expect(hasModule('versed.config')).toBe(true);
        expect(hasModule('versed.books')).toBe(true);
        expect(hasModule('versed.lessons')).toBe(true);
      });
    });
  });
});
