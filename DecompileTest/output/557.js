exports.default = function (t) {
  var module468 = require('./468').useNavigation(),
    module468 = require('./468').useRoute();

  module125.useEffect(
    function () {
      for (var e = [], c = module468; c; ) {
        if ('tab' === c.getState().type) e.push(c);
        c = c.getParent();
      }

      if (0 !== e.length) {
        var l = e.map(function (c) {
          return c.addListener('tabPress', function (c) {
            var l = module468.isFocused(),
              f = e.includes(module468) || module468.getState().routes[0].key === module468.key;
            requestAnimationFrame(function () {
              var e = n(t);
              if (l && f && e && !c.defaultPrevented)
                'scrollToTop' in e
                  ? e.scrollToTop()
                  : 'scrollTo' in e
                  ? e.scrollTo({
                      y: 0,
                      animated: true,
                    })
                  : 'scrollToOffset' in e
                  ? e.scrollToOffset({
                      offset: 0,
                      animated: true,
                    })
                  : 'scrollResponderScrollTo' in e &&
                    e.scrollResponderScrollTo({
                      y: 0,
                      animated: true,
                    });
            });
          });
        });
        return function () {
          l.forEach(function (e) {
            return e();
          });
        };
      }
    },
    [module468, t, module468.key]
  );
};

var module125 = (function (e, n) {
  if (!n && e && e.__esModule) return e;
  if (null === e || ('object' != typeof e && 'function' != typeof e))
    return {
      default: e,
    };
  var o = t(n);
  if (o && o.has(e)) return o.get(e);
  var u = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in e)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(e, l)) {
      var f = c ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
      else u[l] = e[l];
    }

  u.default = e;
  if (o) o.set(e, u);
  return u;
})(require('./125'));

function t(e) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (t = function (e) {
    return e ? o : n;
  })(e);
}

function n(e) {
  return null == e.current
    ? null
    : 'scrollToTop' in e.current || 'scrollTo' in e.current || 'scrollToOffset' in e.current || 'scrollResponderScrollTo' in e.current
    ? e.current
    : 'getScrollResponder' in e.current
    ? e.current.getScrollResponder()
    : 'getNode' in e.current
    ? e.current.getNode()
    : e.current;
}
