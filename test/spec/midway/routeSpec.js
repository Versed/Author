/* global ngMidwayTester, ROUTER */
'use strict';

describe('Midway: Testing Routes', function() {

  var tester;
  beforeEach(function() {
    tester = ngMidwayTester('versed');
  });

  afterEach(function() {
    tester.destroy();
    tester = null;
  });

  it('should have a working profile route', function() {
    expect(ROUTER.routeDefined('profile')).toEqual(true);
    var url = ROUTER.routePath('profile');
    expect(url).to.equal('/profile');
  });
});
