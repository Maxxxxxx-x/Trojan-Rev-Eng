var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native');

function i() {
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

var s = function (e, t) {
    var n = {};

    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);

    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var u = 0;

      for (o = Object.getOwnPropertySymbols(e); u < o.length; u++) t.indexOf(o[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[u]) && (n[o[u]] = e[o[u]]);
    }

    return n;
  },
  p = (function (p) {
    module13.default(v, p);

    var y = v,
      b = i(),
      h = function () {
        var e,
          t = module17.default(y);

        if (b) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function v() {
      module7.default(this, v);
      return h.apply(this, arguments);
    }

    module8.default(v, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.style,
            o = t.direction,
            u = t.wrap,
            l = t.justify,
            i = t.align,
            p = t.children,
            y = s(t, ['style', 'direction', 'wrap', 'justify', 'align', 'children']),
            b = [l, i].map(function (e) {
              var t;

              switch (e) {
                case 'start':
                  t = 'flex-start';
                  break;

                case 'end':
                  t = 'flex-end';
                  break;

                case 'between':
                  t = 'space-between';
                  break;

                case 'around':
                  t = 'space-around';
                  break;

                default:
                  t = e;
              }

              return t;
            }),
            h = {
              flexDirection: o,
              flexWrap: u,
              justifyContent: b[0],
              alignItems: b[1],
            },
            v = module125.default.createElement(
              ReactNative.View,
              module178.default(
                {
                  style: [h, n],
                },
                y
              ),
              p
            );
          return y.onPress || y.onLongPress || y.onPressIn || y.onPressOut ? module125.default.createElement(ReactNative.TouchableWithoutFeedback, module178.default({}, y), v) : v;
        },
      },
    ]);
    return v;
  })(module125.default.Component);

exports.default = p;
p.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'start',
  align: 'center',
};
