var module776 = require('@babel/runtime/helpers/interopRequireDefault')(require('./776')),
  module777 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
        else f[c] = t[c];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./777')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var f = {
  namespace: 'user',
  state: {
    newLogin: false,
  },
  effects: {
    login: function (t, u) {
      var f = t.payload,
        l = u.call,
        c = u.put;
      return (function* () {
        var t = yield l(module777.login, f);

        if ('error' != t) {
          t.offline = false;
          module432.default.set('User', t);
          module432.default.setAuth(t.token);
          yield c({
            type: 'newLogin',
            payload: {},
          });
        }

        return t;
      })();
    },
    updateLocation: function (t, o) {
      var u = t.payload,
        f = o.call;
      return (function* () {
        return yield f(module777.updateLocation, u);
      })();
    },
  },
  reducers: {
    newLogin: function (n, o) {
      module776.default(o.payload);
      return Object.assign({}, n, {
        newLogin: true,
      });
    },
  },
};
exports.default = f;
