exports.default = function (u) {
  var c = u.id,
    f = u.onAction,
    s = u.getState,
    l = u.emitter,
    p = u.router,
    v = module125.useContext(module479.default),
    y = module125.useContext(module476.default);
  return module125.useMemo(
    function () {
      var t = function (t) {
          var n = 'function' == typeof t ? t(s()) : t,
            o = f(n);
          if (!(o || null == v)) v(n);
        },
        module486 = Object.assign({}, p.actionCreators, require('./486').CommonActions),
        o = Object.keys(module486).reduce(function (o, u) {
          o[u] = function () {
            return t(module486[u].apply(module486, arguments));
          };

          return o;
        }, {}),
        module486 = Object.assign({}, y, o, {
          dispatch: t,
          emit: l.emit,
          isFocused: y
            ? y.isFocused
            : function () {
                return true;
              },
          canGoBack: function () {
            var t = s();
            return (
              null !==
                p.getStateForAction(t, require('./486').CommonActions.goBack(), {
                  routeNames: t.routeNames,
                  routeParamList: {},
                  routeGetIdList: {},
                }) ||
              (null == y ? undefined : y.canGoBack()) ||
              false
            );
          },
          getId: function () {
            return c;
          },
          getParent: function (t) {
            if (undefined !== t) {
              for (var n = module486; n && t !== n.getId(); ) n = n.getParent();

              return n;
            }

            return y;
          },
          getState: s,
        });

      return module486;
    },
    [c, l.emit, s, f, v, y, p]
  );
};

var module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
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
  })(require('./125')),
  module476 = require('@babel/runtime/helpers/interopRequireDefault')(require('./476')),
  module479 = require('@babel/runtime/helpers/interopRequireDefault')(require('./479'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

require('./516').PrivateValueStore;
