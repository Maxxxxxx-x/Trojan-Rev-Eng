var ReactNative = require('react-native'),
  p = {
    exitApp: function () {
      ReactNative.NativeModules.RNExitApp.exitApp();
    },
  };

exports.default = p;
