exports.__esModule = true;
exports.createSelectorHook = u;

var module125 = require('./125'),
  module567 = require('./567').notInitialized;

exports.initializeUseSelector = function (t) {
  module567 = t;
};

var o = function (t, n) {
  return t === n;
};

function u() {
  var module565 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : require('./562').ReactReduxContext,
    module565 =
      module565 === require('./562').ReactReduxContext
        ? require('./565').useReduxContext
        : function () {
            return module125.useContext(module565);
          };
  return function (u) {
    var c = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : o,
      s = module565(),
      l = s.store,
      S = s.subscription,
      v = s.getServerState,
      x = module567(S.addNestedSub, l.getState, v || l.getState, u, c);
    module125.useDebugValue(x);
    return x;
  };
}

var a = u();
exports.useSelector = a;
