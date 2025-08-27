/**
 * This is a simple wrapper to unify EventEmitter implementations across platforms.
 */

let EventEmitter: any;

try {
  iEventEmitter = require('events').EventEmitter;
} catch (_) {
  // EventEmitter unavailable
}

export default EventEmitter;
