var ReactNative = require('react-native'),
  t = ReactNative.NativeModules.PlatformLocalStorage || ReactNative.NativeModules.RNC_AsyncSQLiteDBStorage || ReactNative.NativeModules.RNCAsyncStorage;

if (!t && require('./437').shouldFallbackToLegacyNativeModule())
  t = ReactNative.TurboModuleRegistry
    ? ReactNative.TurboModuleRegistry.get('AsyncSQLiteDBStorage') || ReactNative.TurboModuleRegistry.get('AsyncLocalStorage')
    : ReactNative.NativeModules.AsyncSQLiteDBStorage || ReactNative.NativeModules.AsyncLocalStorage;
var l = t;
exports.default = l;
