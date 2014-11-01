Package.describe({
    summary: "Add connect-busboy to meteor",
  version: "0.1.0",
  git: "https://github.com/pfafman/meteor-connect-busboy.git"
});


Npm.depends({
  "connect-busboy": "0.0.2"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.export('busboy');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['pfafman:connect-busboy', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});