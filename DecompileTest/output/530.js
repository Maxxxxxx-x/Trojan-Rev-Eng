exports.default = function (u) {
  var o = u.state,
    f = u.emitter,
    c = module125.useContext(module476.default),
    l = module125.useRef(),
    s = o.routes[o.index].key;
  module125.useEffect(
    function () {
      return null == c
        ? undefined
        : c.addListener('focus', function () {
            l.current = s;
            f.emit({
              type: 'focus',
              target: s,
            });
          });
    },
    [s, f, c]
  );
  module125.useEffect(
    function () {
      return null == c
        ? undefined
        : c.addListener('blur', function () {
            l.current = undefined;
            f.emit({
              type: 'blur',
              target: s,
            });
          });
    },
    [s, f, c]
  );
  module125.useEffect(
    function () {
      var t = l.current;
      l.current = s;
      if (!(undefined !== t || c))
        f.emit({
          type: 'focus',
          target: s,
        });
      if (!(t === s || (c && !c.isFocused())))
        undefined !== t &&
          (f.emit({
            type: 'blur',
            target: t,
          }),
          f.emit({
            type: 'focus',
            target: s,
          }));
    },
    [s, f, c]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
        else f[l] = t[l];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./125')),
  module476 = require('@babel/runtime/helpers/interopRequireDefault')(require('./476'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}
