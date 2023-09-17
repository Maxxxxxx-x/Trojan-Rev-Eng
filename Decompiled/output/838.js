exports.executeNativeBackPress = function () {
  ReactNative.BackHandler.exitApp();
  return true;
};

var ReactNative = require('react-native'),
  o = ['ios', 'android'].includes(ReactNative.Platform.OS);

exports.isSearchBarAvailableForCurrentPlatform = o;
