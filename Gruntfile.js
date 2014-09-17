'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

   grunt.initConfig({
   });

  grunt.registerTask('default', ['serve']);
  grunt.registerTask('serve', [
    'clean:server',
    'sass:server',
    'copy:styles',
    'autoprefixer:server',
    'connect:livereload',
    'open',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'connect:test'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'sass',
    'copy',
    'useminPrepare',
    'imagemin',
    'concat',
    'autoprefixer',
    'uglify',
    'vulcanize',
    'usemin',
    'minifyHtml'
  ]);
};
