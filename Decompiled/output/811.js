exports.default = function (o, f, l) {
  var n,
    u = o.width > o.height;
  n =
    'ios' === ReactNative.Platform.OS
      ? ReactNative.Platform.isPad || ReactNative.Platform.isTV
        ? f
          ? 56
          : 50
        : u
        ? 32
        : f
        ? 56
        : 44
      : 'android' === ReactNative.Platform.OS
      ? 56
      : 64;
  return n + l;
};

var ReactNative = require('react-native');
