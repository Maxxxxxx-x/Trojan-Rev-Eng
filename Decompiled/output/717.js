var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module624 = require('@babel/runtime/helpers/interopRequireDefault')(require('./624')),
  module718 = require('@babel/runtime/helpers/interopRequireDefault')(require('./718'));

function y(e) {
  var t = p();
  return function () {
    var l,
      n = module17.default(e);

    if (t) {
      var s = module17.default(this).constructor;
      l = Reflect.construct(n, arguments, s);
    } else l = n.apply(this, arguments);

    return module15.default(this, l);
  };
}

function p() {
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

var h = function (e, t) {
    var l = {};

    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (l[n] = e[n]);

    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var u = 0;

      for (n = Object.getOwnPropertySymbols(e); u < n.length; u++) t.indexOf(n[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[u]) && (l[n[u]] = e[n[u]]);
    }

    return l;
  },
  module390 = (function (u) {
    module13.default(f, u);
    var o = y(f);

    function f() {
      module7.default(this, f);
      return o.apply(this, arguments);
    }

    module8.default(f, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.children,
            n = t.style,
            u = {};
          if (false === t.wrap)
            u = {
              numberOfLines: 1,
            };
          return module125.default.createElement(
            require('./390').WithTheme,
            {
              styles: this.props.styles,
              themeStyles: module718.default,
            },
            function (t) {
              return module125.default.createElement(
                ReactNative.View,
                {
                  style: [t.Brief],
                },
                module125.default.createElement(
                  ReactNative.Text,
                  module178.default(
                    {
                      style: [t.BriefText, n],
                    },
                    u
                  ),
                  l
                )
              );
            }
          );
        },
      },
    ]);
    return f;
  })(module125.default.Component);

exports.Brief = module390;

var v = (function (u) {
  module13.default(p, u);
  var o = y(p);

  function p() {
    module7.default(this, p);
    return o.apply(this, arguments);
  }

  module8.default(p, [
    {
      key: 'render',
      value: function () {
        var t = this,
          l = this.props,
          n = l.styles,
          u = l.children,
          o = l.multipleLine,
          y = l.thumb,
          p = l.extra,
          E = l.arrow,
          module390 = l.style,
          w = l.onPress,
          P = l.onPressIn,
          b = l.onPressOut,
          O = l.onLongPress,
          x = l.delayLongPress,
          L = l.wrap,
          V = l.disabled,
          T = l.align,
          C = h(l, [
            'styles',
            'children',
            'multipleLine',
            'thumb',
            'extra',
            'arrow',
            'style',
            'onPress',
            'onPressIn',
            'onPressOut',
            'onLongPress',
            'delayLongPress',
            'wrap',
            'disabled',
            'align',
          ]);
        return module125.default.createElement(
          require('./390').WithTheme,
          {
            styles: n,
            themeStyles: module718.default,
          },
          function (l) {
            var n = {};
            if (false === L)
              n = {
                numberOfLines: 1,
              };
            var c = {};
            c =
              !V && w
                ? {
                    underlayColor: ReactNative.StyleSheet.flatten(l.underlayColor).backgroundColor,
                    activeOpacity: 0.5,
                  }
                : {
                    activeOpacity: 1,
                  };
            var h,
              A,
              I = {};

            if (
              ('top' === T
                ? (I = {
                    alignItems: 'flex-start',
                  })
                : 'bottom' === T &&
                  (I = {
                    alignItems: 'flex-end',
                  }),
              Array.isArray(u))
            ) {
              var k = [];
              u.forEach(function (t, u) {
                if (module125.default.isValidElement(t)) k.push(t);
                else
                  k.push(
                    module125.default.createElement(
                      ReactNative.Text,
                      module178.default(
                        {
                          style: [l.Content],
                        },
                        n,
                        {
                          key: ''.concat(u, '-children'),
                        }
                      ),
                      t
                    )
                  );
              });
              h = module125.default.createElement(
                ReactNative.View,
                {
                  style: [l.column],
                },
                k
              );
            } else
              h =
                u && module125.default.isValidElement(u)
                  ? module125.default.createElement(
                      ReactNative.View,
                      {
                        style: [l.column],
                      },
                      u
                    )
                  : module125.default.createElement(
                      ReactNative.View,
                      {
                        style: [l.column],
                      },
                      module125.default.createElement(
                        ReactNative.Text,
                        module178.default(
                          {
                            style: [l.Content],
                          },
                          n
                        ),
                        u
                      )
                    );

            if (
              p &&
              ((A = module125.default.createElement(
                ReactNative.View,
                {
                  style: [l.column],
                },
                module125.default.createElement(
                  ReactNative.Text,
                  module178.default(
                    {
                      style: [l.Extra],
                    },
                    n
                  ),
                  p
                )
              )),
              module125.default.isValidElement(p))
            ) {
              var B = p.props.children;

              if (Array.isArray(B)) {
                var S = [];
                B.forEach(function (t, u) {
                  if ('string' == typeof t)
                    S.push(
                      module125.default.createElement(
                        ReactNative.Text,
                        module178.default({}, n, {
                          style: [l.Extra],
                          key: ''.concat(u, '-children'),
                        }),
                        t
                      )
                    );
                  else S.push(t);
                });
                A = module125.default.createElement(
                  ReactNative.View,
                  {
                    style: [l.column],
                  },
                  S
                );
              } else A = p;
            }

            var j = {
                horizontal: module125.default.createElement(module624.default, {
                  name: 'right',
                  style: l.Arrow,
                }),
                down: module125.default.createElement(module624.default, {
                  name: 'down',
                  style: l.ArrowV,
                }),
                up: module125.default.createElement(module624.default, {
                  name: 'up',
                  style: l.ArrowV,
                }),
              },
              R = module125.default.createElement(
                ReactNative.View,
                module178.default({}, C, {
                  style: [l.Item, module390],
                }),
                'string' == typeof y
                  ? module125.default.createElement(ReactNative.Image, {
                      source: {
                        uri: y,
                      },
                      style: [l.Thumb, o && l.multipleThumb],
                    })
                  : y,
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: [l.Line, o && l.multipleLine, o && I],
                  },
                  h,
                  A,
                  E
                    ? j[E] ||
                        module125.default.createElement(ReactNative.View, {
                          style: l.Arrow,
                        })
                    : null
                )
              );
            return module125.default.createElement(
              ReactNative.TouchableHighlight,
              module178.default({}, c, {
                onPress: t.props.onClick ? t.props.onClick : w || undefined,
                onPressIn: P,
                onPressOut: b,
                onLongPress: O,
                delayLongPress: x,
              }),
              R
            );
          }
        );
      },
    },
  ]);
  return p;
})(module125.default.Component);

exports.default = v;
v.defaultProps = {
  multipleLine: false,
  wrap: false,
  delayLongPress: 500,
  onLongPress: function () {},
};
v.Brief = module390;
