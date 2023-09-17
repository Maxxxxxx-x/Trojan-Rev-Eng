var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module711 = require('@babel/runtime/helpers/interopRequireDefault')(require('./711'));

function f() {
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

    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);

    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var s = 0;

      for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
    }

    return n;
  },
  y = (function (y) {
    module13.default(S, y);

    var h = S,
      P = f(),
      v = function () {
        var e,
          t = module17.default(h);

        if (P) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function S(e) {
      var n;
      module7.default(this, S);

      (n = v.call(this, e)).onPressIn = function (e) {
        n.setState({
          pressIn: true,
        });
        if (n.props.onPressIn) n.props.onPressIn(e);
      };

      n.onPressOut = function (e) {
        n.setState({
          pressIn: false,
        });
        if (n.props.onPressOut) n.props.onPressOut(e);
      };

      n.onShowUnderlay = function () {
        n.setState({
          touchIt: true,
        });
        if (n.props.onShowUnderlay) n.props.onShowUnderlay();
      };

      n.onHideUnderlay = function () {
        n.setState({
          touchIt: false,
        });
        if (n.props.onHideUnderlay) n.props.onHideUnderlay();
      };

      n.state = {
        pressIn: false,
        touchIt: false,
      };
      return n;
    }

    module8.default(S, [
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.size,
            s = undefined === o ? 'large' : o,
            l = n.type,
            f = undefined === l ? 'default' : l,
            module390 = n.disabled,
            h = n.activeStyle,
            P = n.onPress,
            v = n.style,
            S = n.styles,
            b = n.loading,
            I = p(n, ['size', 'type', 'disabled', 'activeStyle', 'onPress', 'style', 'styles', 'loading']);
          return module125.default.createElement(
            require('./390').WithTheme,
            {
              themeStyles: module711.default,
              styles: S,
            },
            function (n) {
              var o = [
                  n[''.concat(s, 'RawText')],
                  n[''.concat(f, 'RawText')],
                  module390 && n[''.concat(f, 'DisabledRawText')],
                  t.state.pressIn && n[''.concat(f, 'HighlightText')],
                ],
                l = [
                  n.wrapperStyle,
                  n[''.concat(s, 'Raw')],
                  n[''.concat(f, 'Raw')],
                  module390 && n[''.concat(f, 'DisabledRaw')],
                  t.state.pressIn && h && n[''.concat(f, 'Highlight')],
                  h && t.state.touchIt && h,
                  v,
                ],
                u = ReactNative.StyleSheet.flatten(h || n[''.concat(f, 'Highlight')]).backgroundColor,
                p = ReactNative.StyleSheet.flatten(t.state.pressIn ? n[''.concat(f, 'HighlightText')] : n[''.concat(f, 'RawText')]).color;
              return module125.default.createElement(
                ReactNative.TouchableHighlight,
                module178.default(
                  {
                    accessibilityRole: 'button',
                    accessibilityState: {
                      disabled: !!module390,
                    },
                    activeOpacity: 0.4,
                  },
                  I,
                  {
                    style: l,
                    disabled: module390,
                    underlayColor: u,
                    onPress: function (e) {
                      return P && P(e);
                    },
                    onPressIn: t.onPressIn,
                    onPressOut: t.onPressOut,
                    onShowUnderlay: t.onShowUnderlay,
                    onHideUnderlay: t.onHideUnderlay,
                  }
                ),
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: n.container,
                  },
                  b
                    ? module125.default.createElement(ReactNative.ActivityIndicator, {
                        style: n.indicator,
                        animating: true,
                        color: p,
                        size: 'small',
                      })
                    : null,
                  'string' == typeof t.props.children
                    ? module125.default.createElement(
                        ReactNative.Text,
                        {
                          style: o,
                        },
                        t.props.children
                      )
                    : module125.default.createElement(module125.default.Fragment, null, t.props.children)
                )
              );
            }
          );
        },
      },
    ]);
    return S;
  })(module125.default.Component);

exports.default = y;
y.defaultProps = {
  pressIn: false,
  disabled: false,
  loading: false,
  onPress: function (e) {},
  onPressIn: function (e) {},
  onPressOut: function (e) {},
  onShowUnderlay: function (e) {},
  onHideUnderlay: function (e) {},
};
