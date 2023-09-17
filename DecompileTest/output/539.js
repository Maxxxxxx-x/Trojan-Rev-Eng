exports.default = function (c, l) {
  var module489 = module125.useState(function () {
      return require('./489').nanoid();
    }),
    v = module25.default(module489, 1)[0],
    s = module518.default(),
    y = module541.default().key,
    O = module540.default().setPreventRemove;
  module125.useEffect(
    function () {
      O(v, y, c);
      return function () {
        O(v, y, false);
      };
    },
    [O, v, y, c]
  );
  var b = module515.default(function (e) {
    if (c) {
      e.preventDefault();
      l({
        data: e.data,
      });
    }
  });
  module125.useEffect(
    function () {
      return null == s ? undefined : s.addListener('beforeRemove', b);
    },
    [s, b]
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = c(t);
    if (n && n.has(e)) return n.get(e);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in e)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
        var l = f ? Object.getOwnPropertyDescriptor(e, o) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, o, l);
        else u[o] = e[o];
      }

    u.default = e;
    if (n) n.set(e, u);
    return u;
  })(require('./125')),
  module515 = require('@babel/runtime/helpers/interopRequireDefault')(require('./515')),
  module518 = require('@babel/runtime/helpers/interopRequireDefault')(require('./518')),
  module540 = require('@babel/runtime/helpers/interopRequireDefault')(require('./540')),
  module541 = require('@babel/runtime/helpers/interopRequireDefault')(require('./541'));

function c(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (c = function (e) {
    return e ? n : t;
  })(e);
}
