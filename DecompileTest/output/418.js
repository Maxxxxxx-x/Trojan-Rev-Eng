var ReactNative = require('react-native');

exports.get = function () {
  var n = ReactNative.NativeModules.RNLocation;
  if (!n) console.warn('Could not find the RNLocation native module. Have you correctly linked react-native-location and rebuilt your app?');
  return {
    nativeInterface: n,
    eventEmitter: new ReactNative.NativeEventEmitter(n),
  };
};

exports.default = {
  get: exports.get,
};
