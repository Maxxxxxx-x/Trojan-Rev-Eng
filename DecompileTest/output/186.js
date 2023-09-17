var module187 = require('@babel/runtime/helpers/interopRequireDefault')(require('./187')),
  module141 = require('@babel/runtime/helpers/interopRequireDefault')(require('./141'));

var t = function (t, p) {
  if (true === globals.RN$Bridgeless) {
    var l = "Native Component '" + t + "' that calls codegenNativeComponent was not code generated at build time. Please check its definition.";
    console.error(l);
  }

  var f = p && null != p.paperComponentName ? p.paperComponentName : t;
  if (null != p && null != p.paperComponentNameDeprecated)
    if (module141.default.hasViewManagerConfig(t)) f = t;
    else {
      var u;
      if (null == p.paperComponentNameDeprecated || !module141.default.hasViewManagerConfig(p.paperComponentNameDeprecated))
        throw new Error('Failed to find native component for either ' + t + ' or ' + (null != (u = p.paperComponentNameDeprecated) ? u : '(unknown)'));
      f = p.paperComponentNameDeprecated;
    }
  return module187.default(f);
};

exports.default = t;
