#!/usr/bin/env node

var express = require('express')
  , http = require('http')
  , https = require('https')
  , fs = require('fs')
  , path = require('path')
  , process = require('process')
  , colors = require('colors')
  , autoreload = require('connect-autoreload')

var args = require('optimist')
    .options('port', {
      alias: 'p',
      default: 60000,
      describe: 'Port server listens on',
    })
    .options('exclude', {
      alias: 'e',
      default: '\\.sw[poaxn]$',   // vim extensions
      describe: 'Regex matching files to exclude',
    })
    .options('regex_opts', {
      default: 'im',
      describe: 'Exclusion regex options',
    })
    .options('https', {
      default: false,
      describe: 'Use https',
    })
    .options('key', {
      default: 'dummy_ssl/key.pem',
      describe: 'SSL key',
    })
    .options('cert', {
      default: 'dummy_ssl/cert.pem',
      describe: 'SSL cert',
    })
    .usage('Usage: autoreload directories_to_watch..')
    .demand(1)   // require at least one non-option arg
    .argv

var dirs = args._.map(function(dir) {
  return path.resolve(process.cwd(), dir);
});
var ignore_regex = new RegExp(args.exclude, args.regex_opts);
var config = {
  watch_dirs: dirs.join(' '),  // TODO this will break for dirs with spaces.  fix this in connect-autoreload
  ignore_regex: ignore_regex,
};
var app = module.exports = express();
app.use(autoreload(config));

console.info('\nAdd to your page:');
console.info('\n\t<script src="%s://localhost:%d/autoreload.js"></script>',
            args.https ? 'https' : 'http', args.port);
console.info('\nThen call AutoReload.Watch()\n');

if (args.https) {
  var options = {
    key: fs.readFileSync(path.resolve(__dirname, args.key)),
    cert: fs.readFileSync(path.resolve(__dirname, args.cert)),
  };
  https.createServer(options, app).listen(args.port);
  if (!args.cert || !args.key) {
    console.warn('*** To use the above script, you must go to https://localhost:%d and whitelist the SSL certificate, or provide your own with the --key and --cert options.\n'.red, args.port);
  }
} else {
  app.listen(args.port, null);
}

console.info('Monitoring for changes:', config.watch_dirs)
