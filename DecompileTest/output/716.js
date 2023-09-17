var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module717 = require('@babel/runtime/helpers/interopRequireDefault')(require('./717')),
  module718 = require('@babel/runtime/helpers/interopRequireDefault')(require('./718'));

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var p = function (e, t) {
    var n = {};

    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);

    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var u = 0;

      for (l = Object.getOwnPropertySymbols(e); u < l.length; u++) t.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[u]) && (n[l[u]] = e[l[u]]);
    }

    return n;
  },
  module390 = (function (i) {
    module13.default(E, i);

    var module390 = E,
      h = y(),
      O = function () {
        var e,
          t = module17.default(module390);

        if (h) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function E() {
      module7.default(this, E);
      return O.apply(this, arguments);
    }

    module8.default(E, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.children,
            l = t.style,
            u = t.renderHeader,
            o = t.renderFooter,
            i = t.styles,
            y = p(t, ['children', 'style', 'renderHeader', 'renderFooter', 'styles']);
          return module125.default.createElement(
            require('./390').WithTheme,
            {
              styles: i,
              themeStyles: module718.default,
            },
            function (t) {
              var i = null,
                s = null;

              if (u) {
                var p = 'function' == typeof u ? u() : u;
                if ('string' == typeof p)
                  p = module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: t.Header,
                    },
                    p
                  );
                i = module125.default.createElement(ReactNative.View, null, p);
              }

              if (o) {
                var v = 'function' == typeof o ? o() : o;
                if ('string' == typeof v)
                  v = module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: t.Footer,
                    },
                    v
                  );
                s = module125.default.createElement(ReactNative.View, null, v);
              }

              return module125.default.createElement(
                ReactNative.View,
                module178.default({}, y, {
                  style: l,
                }),
                i,
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: t.Body,
                  },
                  n || null,
                  module125.default.createElement(ReactNative.View, {
                    style: [t.BodyBottomLine],
                  })
                ),
                s
              );
            }
          );
        },
      },
    ]);
    return E;
  })(module125.default.Component);

exports.default = module390;
module390.Item = module717.default;
