exports.default = function (o) {
  var u = module518.default();

  if (undefined !== arguments[1]) {
    console.error(
      "You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect"
    );
  }

  module125.useEffect(
    function () {
      var t,
        n = false,
        c = function () {
          var t = o();
          if (undefined === t || 'function' == typeof t) return t;
        };

      if (u.isFocused()) {
        t = c();
        n = true;
      }

      var f = u.addListener('focus', function () {
          if (!n) {
            if (undefined !== t) t();
            t = c();
            n = true;
          }
        }),
        s = u.addListener('blur', function () {
          if (undefined !== t) t();
          t = undefined;
          n = false;
        });
      return function () {
        if (undefined !== t) t();
        f();
        s();
      };
    },
    [o, u]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = o(n);
    if (u && u.has(t)) return u.get(t);
    var c = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (p && (p.get || p.set)) Object.defineProperty(c, s, p);
        else c[s] = t[s];
      }

    c.default = t;
    if (u) u.set(t, c);
    return c;
  })(require('./125')),
  module518 = require('@babel/runtime/helpers/interopRequireDefault')(require('./518'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}
