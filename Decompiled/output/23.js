exports.get = function (n) {
  return u(n);
};

exports.getEnforcing = function (t) {
  var o = u(t);
  module20.default(null != o, "TurboModuleRegistry.getEnforcing(...): '" + t + "' could not be found. Verify that a module by this name is registered in the native binary.");
  return o;
};

var module20 = require('@babel/runtime/helpers/interopRequireDefault')(require('./20')),
  t = globals.__turboModuleProxy;

function u(n) {
  if (true !== globals.RN$Bridgeless) {
    var module24 = require('./24')[n];

    if (null != module24) return module24;
  }

  return null != t ? t(n) : null;
}
