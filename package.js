Package.describe({
  name: "fgm:streams",
  version: "0.1.18",
  git: "https://github.com/FGM/meteor-streams",
  documentation: "README.md",
  summary: "DB less realtime communication for meteor. A fork of arunoda:streams for Meteor 1.2.1."
});

Package.on_use(function (api, where) {
  api.use('http');
  api.use('check');
  api.use('random');
  api.use('underscore', ['client', 'server']);

  api.addFiles(['lib/ev.js', 'lib/server.js', 'lib/stream_permission.js'], 'server');
  api.addFiles(['lib/ev.js', 'lib/client.js'], 'client');
});
