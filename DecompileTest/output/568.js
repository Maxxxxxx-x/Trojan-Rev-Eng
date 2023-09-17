exports.__esModule = true;

var module125 = (function (t, u) {
  if (!u && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = n(u);
  if (o && o.has(t)) return o.get(t);
  var c = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var l = f ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (l && (l.get || l.set)) Object.defineProperty(c, s, l);
      else c[s] = t[s];
    }

  c.default = t;
  if (o) o.set(t, c);
  return c;
})(require('./125'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    o = new WeakMap();
  return (n = function (t) {
    return t ? o : u;
  })(t);
}

var u = function (n) {
  var module571 = n.store,
    o = n.context,
    c = n.children,
    f = n.serverState,
    s = module125.useMemo(
      function () {
        var module569 = require('./569').createSubscription(module571);

        return {
          store: module571,
          subscription: module569,
          getServerState: f
            ? function () {
                return f;
              }
            : undefined,
        };
      },
      [module571, f]
    ),
    l = module125.useMemo(
      function () {
        return module571.getState();
      },
      [module571]
    );

  require('./571').useIsomorphicLayoutEffect(
    function () {
      var t = s.subscription;
      t.onStateChange = t.notifyNestedSubs;
      t.trySubscribe();
      if (l !== module571.getState()) t.notifyNestedSubs();
      return function () {
        t.tryUnsubscribe();
        t.onStateChange = undefined;
      };
    },
    [s, l]
  );

  var module562 = o || require('./562').ReactReduxContext;

  return module125.default.createElement(
    module562.Provider,
    {
      value: s,
    },
    c
  );
};

exports.default = u;
