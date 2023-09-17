exports.withTranslation = function (t) {
  var c = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  return function (s) {
    function l(l) {
      var p = l.forwardedRef,
        O = module96.default(l, i),
        module454 = require('react-i18next').useTranslation(
          t,
          u(
            u({}, O),
            {},
            {
              keyPrefix: c.keyPrefix,
            }
          )
        ),
        b = module25.default(module454, 3),
        w = b[0],
        j = b[1],
        P = b[2],
        h = u(
          u({}, O),
          {},
          {
            t: w,
            i18n: j,
            tReady: P,
          }
        );

      if (c.withRef && p) h.ref = p;
      else if (!c.withRef && p) h.forwardedRef = p;
      return module125.createElement(s, h);
    }

    l.displayName = 'withI18nextTranslation('.concat(require('./451').getDisplayName(s), ')');
    l.WrappedComponent = s;
    return c.withRef
      ? module125.forwardRef(function (t, n) {
          return module125.createElement(
            l,
            Object.assign({}, t, {
              forwardedRef: n,
            })
          );
        })
      : l;
  };
};

var module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = require('./125'),
  i = ['forwardedRef'];

function c(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);
    if (n)
      f = f.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, f);
  }

  return o;
}

function u(n) {
  for (var o = 1; o < arguments.length; o++) {
    var f = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      c(Object(f), true).forEach(function (o) {
        module241.default(n, o, f[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(f));
    else
      c(Object(f)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(f, t));
      });
  }

  return n;
}
