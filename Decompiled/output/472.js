exports.default = function (n) {
  var c = n.children,
    f = module125.useRef(),
    l = module125.useMemo(function () {
      return {
        register: function (t) {
          var n = f.current;
          if (undefined !== n && t !== n) throw new Error(o);
          f.current = t;
        },
        unregister: function (t) {
          var n = f.current;
          if (t === n) f.current = undefined;
        },
      };
    }, []);
  return module125.createElement(
    u.Provider,
    {
      value: l,
    },
    c
  );
};

var module125 = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var c = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var v = f ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (v && (v.get || v.set)) Object.defineProperty(c, l, v);
      else c[l] = t[l];
    }

  c.default = t;
  if (u) u.set(t, c);
  return c;
})(require('./125'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

var o =
    'Another navigator is already registered for this container. You likely have multiple navigators under a single "NavigationContainer" or "Screen". Make sure each navigator is under a separate "Screen" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.',
  u = module125.createContext(undefined);
exports.SingleNavigatorContext = u;
