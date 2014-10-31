'use strict';

var Hapi = require('hapi');
var config = require('getconfig');
var server = new Hapi.Server(config.http.listen, config.http.port);
var moonbootsConfig = require('./moonbootsConfig');

server.pack.register({ plugin: require('moonboots_hapi'), options: moonbootsConfig }, function(err) {
  if (err) { throw err; }

  server.start(function(err) {
    if (err) { throw err; }
    console.log('test is running at: http://localhost:' + config.http.port);
  });
});
