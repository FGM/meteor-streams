Package.describe({
  documentation: "README.md",
  git: "https://github.com/FGM/meteor-streams",
  name: "fgm:streams",
  summary: "DB less realtime communication for meteor. A fork of arunoda:streams for Meteor 1.2.1/1.3.x.",
  version: "0.1.18"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('check');
  api.use('http');
  api.use('random');
  api.use('underscore', ['client', 'server']);

  api.addFiles(['lib/ev.js', 'lib/server.js', 'lib/stream_permission.js'], 'server');
  api.addFiles(['lib/ev.js', 'lib/client.js'], 'client');
});
