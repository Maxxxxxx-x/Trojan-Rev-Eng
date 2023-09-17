function t(n) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    f = new WeakMap();
  return (t = function (t) {
    return t ? f : u;
  })(n);
}

var module125 = (function (n, u) {
  if (!u && n && n.__esModule) return n;
  if (null === n || ('object' != typeof n && 'function' != typeof n))
    return {
      default: n,
    };
  var f = t(u);
  if (f && f.has(n)) return f.get(n);
  var o = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in n)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(n, l)) {
      var p = c ? Object.getOwnPropertyDescriptor(n, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(o, l, p);
      else o[l] = n[l];
    }

  o.default = n;
  if (f) f.set(n, o);
  return o;
})(require('./125')).memo(
  function (t) {
    return t.children;
  },
  function (t, n) {
    var u = Object.keys(t),
      f = Object.keys(n);
    if (u.length !== f.length) return false;

    for (var o of u) if ('children' !== o && t[o] !== n[o]) return false;

    return true;
  }
);

exports.default = module125;
