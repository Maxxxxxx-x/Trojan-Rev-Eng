function t(n) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (t = function (t) {
    return t ? u : o;
  })(n);
}

exports.createRootTag = function (t) {
  return t;
};

var module125 = (function (n, o) {
  if (!o && n && n.__esModule) return n;
  if (null === n || ('object' != typeof n && 'function' != typeof n))
    return {
      default: n,
    };
  var u = t(o);
  if (u && u.has(n)) return u.get(n);
  var f = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var p in n)
    if ('default' !== p && Object.prototype.hasOwnProperty.call(n, p)) {
      var l = c ? Object.getOwnPropertyDescriptor(n, p) : null;
      if (l && (l.get || l.set)) Object.defineProperty(f, p, l);
      else f[p] = n[p];
    }

  f.default = n;
  if (u) u.set(n, f);
  return f;
})(require('./125')).createContext(0);

exports.RootTagContext = module125;
