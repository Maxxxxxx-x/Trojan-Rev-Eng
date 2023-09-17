exports.default = function (r, u) {
  var o = u.independent,
    c = u.enabled,
    f = undefined === c || c,
    s = u.prefixes,
    l = u.filter,
    v = u.config,
    p = u.getInitialURL,
    h =
      undefined === p
        ? function () {
            return Promise.race([
              ReactNative.Linking.getInitialURL(),
              new Promise(function (e) {
                return setTimeout(e, 150);
              }),
            ]);
          }
        : p,
    y = u.subscribe,
    b =
      undefined === y
        ? function (e) {
            var n,
              r = function (t) {
                var n = t.url;
                return e(n);
              },
              u = ReactNative.Linking.addEventListener('url', r),
              o = null == (n = ReactNative.Linking.removeEventListener) ? undefined : n.bind(ReactNative.Linking);

            return function () {
              if (null != u && u.remove) u.remove();
              else if (!(null == o)) o('url', r);
            };
          }
        : y,
    k = u.getStateFromPath,
    module468 = undefined === k ? require('./468').getStateFromPath : k,
    P = u.getActionFromState,
    module468 = undefined === P ? require('./468').getActionFromState : P;
  module125.useEffect(function () {}, [f, o]);

  var L = module125.useRef(f),
    O = module125.useRef(s),
    j = module125.useRef(l),
    S = module125.useRef(v),
    _ = module125.useRef(h),
    E = module125.useRef(module468),
    M = module125.useRef(module468);

  module125.useEffect(function () {
    L.current = f;
    O.current = s;
    j.current = l;
    S.current = v;
    _.current = h;
    E.current = module468;
    M.current = module468;
  });
  var F = module125.useCallback(function (e) {
      if (e && (!j.current || j.current(e))) {
        var t = module549.default(O.current, e);
        return undefined !== t ? E.current(t, S.current) : undefined;
      }
    }, []),
    A = module125.useCallback(
      function () {
        var e;

        if (L.current) {
          var t = _.current();

          if (null != t && 'string' != typeof t)
            return t.then(function (e) {
              var t = F(e);
              return t;
            });
          e = F(t);
        }

        var n = {
          then: function (t) {
            return Promise.resolve(t ? t(e) : e);
          },
          catch: function () {
            return n;
          },
        };
        return n;
      },
      [F]
    );
  module125.useEffect(
    function () {
      return b(function (e) {
        if (f) {
          var t = r.current,
            n = t ? F(e) : undefined;

          if (t && n) {
            var u = t.getRootState();
            if (
              n.routes.some(function (e) {
                return !(null != u && u.routeNames.includes(e.name));
              })
            )
              return void console.warn(
                "The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration."
              );
            var o = M.current(n, S.current);
            if (undefined !== o)
              try {
                t.dispatch(o);
              } catch (t) {
                console.warn("An error occurred when trying to handle the link '" + e + "': " + ('object' == typeof t && null != t && 'message' in t ? t.message : t));
              }
            else t.resetRoot(n);
          }
        }
      });
    },
    [f, F, r, b]
  );
  return {
    getInitialState: A,
  };
};

var module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = r(t);
    if (n && n.has(e)) return n.get(e);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var f = o ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, c, f);
        else u[c] = e[c];
      }

    u.default = e;
    if (n) n.set(e, u);
    return u;
  })(require('./125')),
  ReactNative = require('react-native'),
  module549 = require('@babel/runtime/helpers/interopRequireDefault')(require('./549'));

function r(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (r = function (e) {
    return e ? n : t;
  })(e);
}
