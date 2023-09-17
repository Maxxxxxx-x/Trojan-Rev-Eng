exports.__esModule = true;
exports.createStoreHook = o;

var module125 = require('./125');

function o() {
  var module565 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : require('./562').ReactReduxContext,
    module565 =
      module565 === require('./562').ReactReduxContext
        ? require('./565').useReduxContext
        : function () {
            return module125.useContext(module565);
          };
  return function () {
    return module565().store;
  };
}

var n = o();
exports.useStore = n;
