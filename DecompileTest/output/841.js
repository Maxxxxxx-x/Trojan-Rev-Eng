var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var n = c(t);
    if (n && n.has(e)) return n.get(e);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in e)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
        var l = u ? Object.getOwnPropertyDescriptor(e, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, s, l);
        else o[s] = e[s];
      }

    o.default = e;
    if (n) n.set(e, o);
    return o;
  })(require('./125')),
  module842 = require('@babel/runtime/helpers/interopRequireDefault')(require('./842')),
  u = ['id', 'initialRouteName', 'children', 'screenListeners', 'screenOptions'];

function c(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (c = function (e) {
    return e ? n : t;
  })(e);
}

var module463 = require('./463').createNavigatorFactory(function (c) {
  var s = c.id,
    l = c.initialRouteName,
    f = c.children,
    p = c.screenListeners,
    v = c.screenOptions,
    y = module96.default(c, u),
    module463 = require('./463').useNavigationBuilder(require('./463').StackRouter, {
      id: s,
      initialRouteName: l,
      children: f,
      screenListeners: p,
      screenOptions: v,
    }),
    b = module463.state,
    j = module463.descriptors,
    P = module463.navigation,
    k = module463.NavigationContent;

  module125.useEffect(
    function () {
      return null == P
        ? undefined
        : null == P.addListener
        ? undefined
        : P.addListener('tabPress', function (e) {
            var t = P.isFocused();
            requestAnimationFrame(function () {
              if (b.index > 0 && t && !e.defaultPrevented)
                P.dispatch(
                  Object.assign({}, require('./463').StackActions.popToTop(), {
                    target: b.key,
                  })
                );
            });
          });
    },
    [P, b.index, b.key]
  );
  return module125.createElement(
    k,
    null,
    module125.createElement(
      module842.default,
      module178.default({}, y, {
        state: b,
        navigation: P,
        descriptors: j,
      })
    )
  );
});

exports.default = module463;
