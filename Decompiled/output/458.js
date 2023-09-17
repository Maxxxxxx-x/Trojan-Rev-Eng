exports.withSSR = function () {
  return function (t) {
    function c(c) {
      var p = c.initialI18nStore,
        l = c.initialLanguage,
        s = module96.default(c, o);

      require('./459').useSSR(p, l);

      return module125.createElement(t, u({}, s));
    }

    c.getInitialProps = require('./452').composeInitialProps(t);
    c.displayName = 'withI18nextSSR('.concat(require('./451').getDisplayName(t), ')');
    c.WrappedComponent = t;
    return c;
  };
};

var module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = require('./125'),
  o = ['initialI18nStore', 'initialLanguage'];

function c(t, n) {
  var i = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    i.push.apply(i, o);
  }

  return i;
}

function u(n) {
  for (var i = 1; i < arguments.length; i++) {
    var o = null != arguments[i] ? arguments[i] : {};
    if (i % 2)
      c(Object(o), true).forEach(function (i) {
        module241.default(n, i, o[i]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(o));
    else
      c(Object(o)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t));
      });
  }

  return n;
}
