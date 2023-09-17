exports.default = function (f) {
  var o = module125.useState(f),
    c = module25.default(o, 1)[0],
    l = [false, undefined];
  c.then(function (t) {
    l = [true, t];
  });
  var p = module125.useState(l),
    y = module25.default(p, 2),
    s = y[0],
    v = y[1],
    O = module25.default(s, 1)[0];
  module125.useEffect(
    function () {
      var module25 = module271.default(function* () {
          var t;

          try {
            t = yield c;
          } finally {
            if (!u) v([true, t]);
          }
        }),
        u = false,
        f = function () {
          return module25.apply(this, arguments);
        };

      if (!O) f();
      return function () {
        u = true;
      };
    },
    [c, O]
  );
  return s;
};

var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, l, p);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./125'));

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}
