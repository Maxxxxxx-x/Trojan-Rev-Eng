function t(n) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (t = function (t) {
    return t ? u : o;
  })(n);
}

var n = "Couldn't find a navigation context. Have you wrapped your app with 'NavigationContainer'? See https://reactnavigation.org/docs/getting-started for setup instructions.",
  module125 = (function (n, o) {
    if (!o && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var u = t(o);
    if (u && u.has(n)) return u.get(n);
    var f = {},
      p = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in n)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(n, c)) {
        var l = p ? Object.getOwnPropertyDescriptor(n, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(f, c, l);
        else f[c] = n[c];
      }

    f.default = n;
    if (u) u.set(n, f);
    return f;
  })(require('./125')).createContext({
    isDefault: true,

    get getKey() {
      throw new Error(n);
    },

    get setKey() {
      throw new Error(n);
    },

    get getState() {
      throw new Error(n);
    },

    get setState() {
      throw new Error(n);
    },

    get getIsInitial() {
      throw new Error(n);
    },
  });

exports.default = module125;
