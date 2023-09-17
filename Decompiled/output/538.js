exports.default = function (u) {
  var f = module518.default(),
    o = module125.useState(function () {
      return u(f.getState());
    }),
    c = module25.default(o, 2)[1],
    l = module125.useRef(u);
  module125.useEffect(function () {
    l.current = u;
  });
  module125.useEffect(
    function () {
      return f.addListener('state', function (e) {
        c(l.current(e.data.state));
      });
    },
    [f]
  );
  return u(f.getState());
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = u(t);
    if (n && n.has(e)) return n.get(e);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var l = o ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, c, l);
        else f[c] = e[c];
      }

    f.default = e;
    if (n) n.set(e, f);
    return f;
  })(require('./125')),
  module518 = require('@babel/runtime/helpers/interopRequireDefault')(require('./518'));

function u(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (u = function (e) {
    return e ? n : t;
  })(e);
}
