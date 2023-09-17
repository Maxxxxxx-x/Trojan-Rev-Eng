f(
  [
    '\n             When attempting to resolve the native component ',
    ',\n             componentOverrides.',
    ' is expected to be a function, but found\n             ',
    ' instead.\n          ',
  ],
  [
    '\n             When attempting to resolve the native component ',
    ',\n             componentOverrides.',
    ' is expected to be a function, but found\n             ',
    ' instead.\n          ',
  ]
);
f(
  [
    '\n            When attempting to resolve the native component ',
    ',\n            componentOverrides.',
    ' is expected to be a function that returns a React\n            component. Instead, ',
    ' was found.\n          ',
  ],
  [
    '\n            When attempting to resolve the native component ',
    ',\n            componentOverrides.',
    ' is expected to be a function that returns a React\n            component. Instead, ',
    ' was found.\n          ',
  ]
);

var n =
    Object.assign ||
    function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];

        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
      }

      return n;
    },
  t = f(['\n      SafeModule.create(...) was invoked without any options parameter.\n    '], ['\n      SafeModule.create(...) was invoked without any options parameter.\n    ']),
  ReactNative = require('react-native'),
  module746 = require('./746'),
  module745 = require('./745');

function f(n, t) {
  return Object.freeze(
    Object.defineProperties(n, {
      raw: {
        value: Object.freeze(t),
      },
    })
  );
}

var s = ReactNative.UIManager,
  p = function (n, t) {
    for (var o = undefined, i = 0; i < n.length; i++) if ((o = t(n[i]))) return o;

    return null;
  },
  v = function (n) {
    return ReactNative.UIManager.getViewManagerConfig ? ReactNative.UIManager.getViewManagerConfig(n) : ReactNative.UIManager[n];
  },
  l = function n(t) {
    return t ? (Array.isArray(t) ? p(t, n) : t in s ? t : null) : null;
  },
  w = function n(t) {
    return Array.isArray(t) ? n(t[0]) : t;
  },
  h = function (n) {
    return n.VERSION;
  };

module.exports = function (c) {
  if (!c) throw new Error(module746.default(t));
  var f = c.viewName,
    s = c.propOverrides,
    p = c.componentOverrides,
    M = c.mockComponent,
    b = c.mock,
    y = c.getVersion;
  if ((y || (y = h), !f)) throw new Error('\n      SafeModule.component(...) requires a viewName property to be specified.\n    ');
  if (!M) throw new Error('\n      SafeModule.component(...) requires a mockComponent property to be specified.\n    ');
  w(f);
  var O = l(f),
    N = v(O);
  if (!O || !N) return M;
  var C = n({}, c, {
      mock: b || {},
      moduleName: O + 'Manager',
    }),
    I = module745.default(C),
    V = y(N.Constants || {});

  if (s) {
    var k = s[V],
      P = {};
    if (k) P = 'function' == typeof k ? k(N.NativeProps, N, I) : n({}, k);
    n(N.NativeProps, P);
  }

  var U = ReactNative.requireNativeComponent(O),
    j = U;

  if (
    ((j.runCommand = function (n, t) {
      for (var i = arguments.length, u = Array(i > 2 ? i - 2 : 0), c = 2; c < i; c++) u[c - 2] = arguments[c];

      var f = function () {
        return ReactNative.UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(n), v(O).Commands[t], u);
      };

      return ReactNative.Platform.select({
        android: f,
        ios: function () {
          return I[t](ReactNative.findNodeHandle(n), ...u);
        },
        windows: f,
        default: function () {},
      })();
    }),
    (j.updateView = function (n, t) {
      var i = function () {
        return ReactNative.UIManager.updateView(ReactNative.findNodeHandle(n), O, t);
      };

      ReactNative.Platform.select({
        ios: i,
        android: i,
        windows: i,
        default: function () {},
      })();
    }),
    p)
  ) {
    var x = p[V];
    if (x) j = x(U, I);
  }

  return j;
};
