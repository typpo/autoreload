#!/usr/bin/env node

var express = require('express')
  , path = require('path')
  , process = require('process')
  , autoreload = require('connect-autoreload')

var args = require('optimist')
    .options('port', {
      alias: 'p',
      default: 60000,
    })
    .options('exclude', {
      alias: 'e',
      default: '\\.sw[poax]$',   // vim extensions
    })
    .options('regex_opts', {
      default: 'gi',
    })
    .demand(1)   // require at least one non-option arg
    .argv

var dirs = args._.map(function(dir) {
  return path.resolve(process.cwd(), dir);
});
var ignore_regex = args.exclude ?
  new RegExp(args.exclude, args.regex_opts) : new RegExp('');

var config = {
  watch_dirs: dirs.join(' '),  // TODO this will break for dirs with spaces.  fix this in connect-autoreload
  ignore_regex: args.exclude,
}
console.log(config.watch_dirs)

var app = module.exports = express();
app.use(autoreload(config));
app.listen(args.port, null);
