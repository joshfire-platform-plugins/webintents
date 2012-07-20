/**
 * @fileoverview Inserts the Web Intents JavaScript Shim
 * in the Bootstrap script.
 */
define([], function () {
  return function (runtime, params, callback) {
    runtime.readFile('lib/webintents.min.js', function (err, code) {
      params.content += '\n' + code;
      runtime.readFile('lib/webintents-prefix.js', function (err, prefixCode) {
        params.content += '\n' + prefixCode;
        return callback();
      });
    });
  };
});