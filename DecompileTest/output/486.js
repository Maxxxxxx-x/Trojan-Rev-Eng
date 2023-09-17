var t = {
  CommonActions: true,
  BaseRouter: true,
  DrawerActions: true,
  DrawerRouter: true,
  StackActions: true,
  StackRouter: true,
  TabActions: true,
  TabRouter: true,
};
Object.defineProperty(exports, 'BaseRouter', {
  enumerable: true,
  get: function () {
    return module488.default;
  },
});
Object.defineProperty(exports, 'DrawerActions', {
  enumerable: true,
  get: function () {
    return module490.DrawerActions;
  },
});
Object.defineProperty(exports, 'DrawerRouter', {
  enumerable: true,
  get: function () {
    return module490.default;
  },
});
Object.defineProperty(exports, 'StackActions', {
  enumerable: true,
  get: function () {
    return module492.StackActions;
  },
});
Object.defineProperty(exports, 'StackRouter', {
  enumerable: true,
  get: function () {
    return module492.default;
  },
});
Object.defineProperty(exports, 'TabActions', {
  enumerable: true,
  get: function () {
    return module491.TabActions;
  },
});
Object.defineProperty(exports, 'TabRouter', {
  enumerable: true,
  get: function () {
    return module491.default;
  },
});
var module487 = l(require('./487'));
exports.CommonActions = module487;

var module488 = require('@babel/runtime/helpers/interopRequireDefault')(require('./488')),
  module490 = l(require('./490')),
  module492 = l(require('./492')),
  module491 = l(require('./491'));

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function l(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = b(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
      else u[f] = t[f];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}

Object.keys(require(d[6])).forEach(function (n) {
  if ('default' !== n && '__esModule' !== n)
    Object.prototype.hasOwnProperty.call(t, n) ||
      (n in exports && exports[n] === require(d[6])[n]) ||
      Object.defineProperty(exports, n, {
        enumerable: true,
        get: function () {
          return require(d[6])[n];
        },
      });
});
