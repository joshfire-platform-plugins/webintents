/**
 * @fileoverview User intent hook handler.
 *
 * Delegates the execution to the "startActivity" function that wraps
 * the navigator.startActivity Web Intents function.
 */
define(['./lib/startActivity'], function (startActivity) {
  return function (config) {
    return {
      startActivity: function (intent, onSuccess, onFailure) {
        intent.action = 'share';
        return startActivity(intent, onSuccess, onFailure);
      }
    };
  };
});