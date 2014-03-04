'use strict';

describe('E2E: Testing Routes', function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working /profile route', function() {
    browser().navigateTo('#/profile');
    expect(browser().location().path()).toBe('/profile');
    console.log('browsers');
  });
});
