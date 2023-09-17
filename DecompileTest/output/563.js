function t() {
  var module564 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : require('./562').ReactReduxContext,
    module564 = module564 === require('./562').ReactReduxContext ? require('./564').useStore : require('./564').createStoreHook(module564);
  return function () {
    return module564().dispatch;
  };
}

exports.__esModule = true;
exports.createDispatchHook = t;
var o = t();
exports.useDispatch = o;
