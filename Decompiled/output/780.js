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
        var s = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, c, s);
        else f[c] = t[c];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('./777'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var o = {
  namespace: 'data',
  state: {
    banner: [],
    streamer: [],
    show: null,
  },
  effects: {
    queryBanner: function (u, o) {
      module776.default(u);
      var f = o.call,
        l = o.put;
      return (function* () {
        var t = yield f(module777.banner);
        if ('error' != t)
          yield l({
            type: 'banner',
            payload: {
              data: t,
            },
          });
        return t;
      })();
    },
    queryStreamer: function (u, o) {
      module776.default(u);
      var f = o.call,
        l = o.put;
      return (function* () {
        var t = yield f(module777.streamer);
        if ('error' != t)
          yield l({
            type: 'streamer',
            payload: {
              data: t,
            },
          });
        return t;
      })();
    },
    queryShow: function (u, o) {
      module776.default(u);
      var f = o.call,
        l = o.put;
      return (function* () {
        var t = yield f(module777.show);
        if ('error' != t)
          yield l({
            type: 'show',
            payload: {
              data: t,
            },
          });
        return t;
      })();
    },
  },
  reducers: {
    banner: function (t, n) {
      var u = n.payload.data;
      return Object.assign({}, t, {
        banner: u instanceof Array ? u : [],
      });
    },
    streamer: function (t, n) {
      var u = n.payload.data;
      return Object.assign({}, t, {
        streamer: u instanceof Array ? u : [],
      });
    },
    show: function (t, n) {
      var u = n.payload.data;
      return Object.assign({}, t, {
        show: u,
      });
    },
  },
};
exports.default = o;
