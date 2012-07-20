/**
 * @fileoverview Main wrapper to navigator.startActivity.
 *
 * Returns a function that takes an intent object as defined in the
 * Factory and delagates its execution to navigator.startActivity
 */
define([], function () {
  return function (intent, onSuccess, onFailure) {
    // Put action back in the right namespace
    var action = null;
    switch (intent.action) {
      case 'share':
      case 'edit':
        action = 'http://webintents.org/' + intent.action;
        break;

      case 'like':
        action = 'http://activitystrea.ms/schema/1.0/' + intent.action;
        break;

      default:
        action = intent.action;
        break;
    }

    var intentObject = new Intent({
      action: action,
      type: intent.type || '*/*',
      data: intent.data
    });

    window.navigator.startActivity(intentObject, onSuccess, onFailure);
  };
});