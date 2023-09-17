exports.default = function () {
  var module486 = [].concat(module36.default(Object.keys(require('./486').CommonActions)), [
      'addListener',
      'removeListener',
      'resetRoot',
      'dispatch',
      'isFocused',
      'canGoBack',
      'getRootState',
      'getState',
      'getParent',
      'getCurrentRoute',
      'getCurrentOptions',
    ]),
    c = {},
    s = function (t, n) {
      if (c[t])
        c[t] = c[t].filter(function (t) {
          return t !== n;
        });
    },
    f = null;

  return Object.assign(
    {
      get current() {
        return f;
      },

      set current(n) {
        f = n;
        if (null != n)
          Object.entries(c).forEach(function (o) {
            var u = module25.default(o, 2),
              c = u[0],
              s = u[1];
            s.forEach(function (t) {
              n.addListener(c, t);
            });
          });
      },

      isReady: function () {
        return null != f && f.isReady();
      },
    },
    module486.reduce(function (t, n) {
      t[n] = function (...args) {
        var h;
        if (null != f) return (h = f)[n].apply(h, args);

        switch (n) {
          case 'addListener':
            var v = args[0],
              p = args[1];
            c[v] = c[v] || [];
            c[v].push(p);
            return function () {
              return s(v, p);
            };

          case 'removeListener':
            var R = args[0],
              O = args[1];
            s(R, O);
            break;

          default:
            console.error(o);
        }
      };

      return t;
    }, {})
  );
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36')),
  o =
    "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";

exports.NOT_INITIALIZED_ERROR = o;
