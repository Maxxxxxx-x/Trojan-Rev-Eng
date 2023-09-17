var t =
    (this && this.__createBinding) ||
    (Object.create
      ? function (t, n, u, f) {
          if (undefined === f) f = u;
          Object.defineProperty(t, f, {
            enumerable: true,
            get: function () {
              return n[u];
            },
          });
        }
      : function (t, n, u, f) {
          if (undefined === f) f = u;
          t[f] = n[u];
        }),
  n =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, 'default', {
            enumerable: true,
            value: n,
          });
        }
      : function (t, n) {
          t.default = n;
        }),
  u =
    (this && this.__importStar) ||
    function (u) {
      if (u && u.__esModule) return u;
      var f = {};
      if (null != u) for (var c in u) 'default' !== c && Object.prototype.hasOwnProperty.call(u, c) && t(f, u, c);
      n(f, u);
      return f;
    };

var module125 = u(require('./125')),
  c = 'undefined' != typeof document ? module125.useLayoutEffect : module125.useEffect;

exports.default = function (t) {
  var n = module125.useRef(t),
    u = module125.useRef(function (...args) {
      return n.current.apply(this, args);
    }).current;
  c(function () {
    n.current = t;
  });
  return u;
};
