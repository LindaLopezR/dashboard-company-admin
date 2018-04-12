Package.describe({
  name: 'igoandsee:dashboard-company-admin',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('blaze-html-templates@1.0.4');
  api.use('ecmascript');
  api.use('templating');
  api.use('session');
  api.mainModule('dashboard-company-admin.js', 'client');
});

Npm.depends({
  moment: '2.18.1',
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('dashboard-company-admin');
  api.mainModule('dashboard-company-admin-tests.js');
});
