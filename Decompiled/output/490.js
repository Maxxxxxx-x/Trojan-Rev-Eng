exports.default = function (s) {
  var f = s.defaultStatus,
    l = undefined === f ? 'closed' : f,
    p = module96.default(s, u),
    y = module491.default(p),
    O = function (t) {
      var n;
      return Boolean(
        null == (n = t.history)
          ? undefined
          : n.some(function (t) {
              return 'drawer' === t.type;
            })
      );
    },
    w = function (n) {
      return O(n)
        ? n
        : Object.assign({}, n, {
            history: [].concat(module36.default(n.history), [
              {
                type: 'drawer',
                status: 'open' === l ? 'closed' : 'open',
              },
            ]),
          });
    },
    v = function (t) {
      return O(t)
        ? Object.assign({}, t, {
            history: t.history.filter(function (t) {
              return 'drawer' !== t.type;
            }),
          })
        : t;
    },
    A = function (t) {
      return 'open' === l ? v(t) : w(t);
    },
    R = function (t) {
      return 'open' === l ? w(t) : v(t);
    };

  return Object.assign({}, y, {
    type: 'drawer',
    getInitialState: function (t) {
      var n = t.routeNames,
        o = t.routeParamList,
        u = t.routeGetIdList,
        s = y.getInitialState({
          routeNames: n,
          routeParamList: o,
          routeGetIdList: u,
        });
      return Object.assign({}, s, {
        default: l,
        stale: false,
        type: 'drawer',
        key: 'drawer-' + require('./489').nanoid(),
      });
    },
    getRehydratedState: function (t, n) {
      var o = n.routeNames,
        u = n.routeParamList,
        s = n.routeGetIdList;
      if (false === t.stale) return t;
      var c = y.getRehydratedState(t, {
        routeNames: o,
        routeParamList: u,
        routeGetIdList: s,
      });

      if (O(t)) {
        c = v(c);
        c = w(c);
      }

      return Object.assign({}, c, {
        default: l,
        type: 'drawer',
        key: 'drawer-' + require('./489').nanoid(),
      });
    },
    getStateForRouteFocus: function (t, n) {
      var o = y.getStateForRouteFocus(t, n);
      return R(o);
    },
    getStateForAction: function (t, n, o) {
      switch (n.type) {
        case 'OPEN_DRAWER':
          return A(t);

        case 'CLOSE_DRAWER':
          return R(t);

        case 'TOGGLE_DRAWER':
          return O(t) ? v(t) : w(t);

        case 'JUMP_TO':
        case 'NAVIGATE':
          var u = y.getStateForAction(t, n, o);
          return null != u && u.index !== t.index ? R(u) : u;

        case 'GO_BACK':
          return O(t) ? v(t) : y.getStateForAction(t, n, o);

        default:
          return y.getStateForAction(t, n, o);
      }
    },
    actionCreators: c,
  });
};

var module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module491 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
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
  })(require('./491')),
  u = ['defaultStatus'];

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

var c = Object.assign({}, module491.TabActions, {
  openDrawer: function () {
    return {
      type: 'OPEN_DRAWER',
    };
  },
  closeDrawer: function () {
    return {
      type: 'CLOSE_DRAWER',
    };
  },
  toggleDrawer: function () {
    return {
      type: 'TOGGLE_DRAWER',
    };
  },
});
exports.DrawerActions = c;
