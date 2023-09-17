exports.default = function (n) {
  var o = module125.useRef(n);
  o.current = n;
  module125.useEffect(function () {
    o.current = null;
  });
  return module125.useRef(function (n) {
    var f = n.children,
      c = o.current;
    if (null === c) throw new Error('The returned component must be rendered in the same render phase as the hook.');
    return module125.createElement(
      u,
      {
        render: c,
      },
      f
    );
  }).current;
};

var module125 = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = n(u);
  if (o && o.has(t)) return o.get(t);
  var f = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
      else f[l] = t[l];
    }

  f.default = t;
  if (o) o.set(t, f);
  return f;
})(require('./125'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    o = new WeakMap();
  return (n = function (t) {
    return t ? o : u;
  })(t);
}

var u = function (t) {
  return t.render(t.children);
};
