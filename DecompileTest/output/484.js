exports.default = function (u) {
  var f = module125.useRef(c),
    o = module125.useRef(false),
    l = module125.useRef(true);
  module125.useEffect(function () {
    l.current = true;
    return function () {
      l.current = false;
    };
  }, []);
  if (f.current === c) f.current = 'function' == typeof u ? u() : u;
  var s = module125.useState(f.current),
    p = module25.default(s, 2),
    y = p[0],
    b = p[1],
    v = module125.useCallback(function () {
      return f.current;
    }, []),
    O = module125.useCallback(function (t) {
      if (t !== f.current && l.current) {
        f.current = t;
        if (!o.current) b(t);
      }
    }, []),
    j = module125.useCallback(function (t) {
      o.current = true;

      try {
        t();
      } finally {
        o.current = false;
      }
    }, []),
    k = module125.useCallback(function () {
      if (l.current) b(f.current);
    }, []);
  if (y !== f.current) b(f.current);
  var P = f.current;
  module125.useDebugValue(P);
  return [P, v, O, j, k];
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var c = u(n);
    if (c && c.has(t)) return c.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
        else f[l] = t[l];
      }

    f.default = t;
    if (c) c.set(t, f);
    return f;
  })(require('./125'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    c = new WeakMap();
  return (u = function (t) {
    return t ? c : n;
  })(t);
}

var c = {};
