var n,
  t,
  module418 = require('./418').default.get(),
  o = module418.nativeInterface,
  c = module418.eventEmitter;

exports._configureHelpers = function (s, u) {
  o = s;
  c = u;
  n = new (require('./419').default)(o, c);
  t = new (require('./420').default)(o, c);
  c.addListener('onWarning', function (n) {
    console.warn('react-native-location warning:', n);
  });
};

exports._configureHelpers(o, c);

exports.configure = function (n) {
  return o.configure(n);
};

exports.requestPermission = function (n) {
  return t.requestPermission(n);
};

exports.getCurrentPermission = function () {
  return t.getCurrentPermission();
};

exports.checkPermission = function (n) {
  return t.checkPermission(n);
};

exports.subscribeToPermissionUpdates = function (n) {
  return t.subscribeToPermissionUpdates(n);
};

exports.subscribeToLocationUpdates = function (t) {
  return n.subscribeToLocationUpdates(t);
};

exports.getLatestLocation = function (t) {
  if (undefined === t) t = {};
  var s = new Promise(function (t) {
    var s = n.subscribeToLocationUpdates(function (n) {
      if (0 !== n.length) {
        var o = n.sort(function (n, t) {
          return t.timestamp - n.timestamp;
        });
        if (s) s();
        t(o[0]);
      }
    });
  });
  if (null === t.timeout) return s;
  var o = t.timeout || 1e4;
  return require('./421').promiseTimeoutResolveNull(o, s);
};

exports.subscribeToHeadingUpdates = function (t) {
  return n.subscribeToHeadingUpdates(t);
};

exports.subscribeToSignificantLocationUpdates = function (t) {
  return n.subscribeToSignificantLocationUpdates(t);
};

exports.default = {
  configure: exports.configure,
  requestPermission: exports.requestPermission,
  checkPermission: exports.checkPermission,
  getCurrentPermission: exports.getCurrentPermission,
  subscribeToPermissionUpdates: exports.subscribeToPermissionUpdates,
  subscribeToLocationUpdates: exports.subscribeToLocationUpdates,
  getLatestLocation: exports.getLatestLocation,
  subscribeToHeadingUpdates: exports.subscribeToHeadingUpdates,
  subscribeToSignificantLocationUpdates: exports.subscribeToSignificantLocationUpdates,
  _configureHelpers: exports._configureHelpers,
  _nativeInterface: o,
  _eventEmitter: c,
};
