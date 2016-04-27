Package.describe({
  name: 'verso:intercom',
  summary: "Intercom.io basic integration (uses 'widget' snippet)",
  version: '1.3.3',
  git: 'https://github.com/versolearning/meteor-intercom.git'
});

Npm.depends({'intercom-client':'1.0.1'});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@1.2.1');

  api.use('underscore');
  api.use(['session', 'tracker'], 'client');
  api.use('accounts-base', ['client', 'server']);

  api.add_files('server/intercom_server.js', 'server');
  api.add_files(['client/intercom_loader.js', 'client/intercom_client.js'], 'client');

  api.export('IntercomSettings');
  api.export('IntercomHash', 'server');
  api.export('IntercomClient', 'server');
});
