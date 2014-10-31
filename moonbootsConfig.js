'use strict';
var config = require('getconfig');
var lessitizer = require('lessitizer');

module.exports = {
  beforeBuildCSS: function(done) {
    if (config.isDev) {
      done();
      return;
    }
  }
};
