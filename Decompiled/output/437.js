exports.shouldFallbackToLegacyNativeModule = function () {
  var o,
    t,
    l = null == (o = ReactNative.NativeModules.NativeUnimoduleProxy) ? undefined : null == (t = o.modulesConstants) ? undefined : t.ExponentConstants;

  if (l) {
    var u = l.appOwnership && !l.executionEnvironment;
    if (u || ['storeClient', 'standalone'].includes(l.executionEnvironment)) return true;
  }

  return false;
};

var ReactNative = require('react-native');
