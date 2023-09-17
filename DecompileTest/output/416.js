exports.useOnEvent = function (t, f, c) {
  var l = o(f, c),
    s = l.loading,
    E = l.result,
    _ = module125.useState(c),
    p = module25.default(_, 2),
    y = p[0],
    I = p[1];

  module125.useEffect(
    function () {
      I(E);
    },
    [E]
  );
  module125.useEffect(
    function () {
      var n = v.addListener(t, I);
      return function () {
        return n.remove();
      };
    },
    [t]
  );
  return {
    loading: s,
    result: y,
  };
};

exports.useOnMount = o;

var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = require('./125'),
  ReactNative = require('react-native');

function o(f, o) {
  var v = module125.useState({
      loading: true,
      result: o,
    }),
    c = module25.default(v, 2),
    l = c[0],
    s = c[1];
  module125.useEffect(
    function () {
      var n;
      ((n = module271.default(function* () {
        var t = yield f();
        s({
          loading: false,
          result: t,
        });
      })),
      function () {
        return n.apply(this, arguments);
      })();
    },
    [f]
  );
  return l;
}

var v = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo);
exports.deviceInfoEmitter = v;
