var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = (function (e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || ('object' != typeof e && 'function' != typeof e))
      return {
        default: e,
      };
    var l = u(t);
    if (l && l.has(e)) return l.get(e);
    var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var b = o ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (b && (b.get || b.set)) Object.defineProperty(n, c, b);
        else n[c] = e[c];
      }

    n.default = e;
    if (l) l.set(e, n);
    return n;
  })(require('./125')),
  ReactNative = require('react-native');

function u(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    l = new WeakMap();
  return (u = function (e) {
    return e ? l : t;
  })(e);
}

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

var f = ReactNative.StyleSheet.create({
    tabStyle: {
      paddingVertical: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#0076FF',
      borderWidth: 1,
      backgroundColor: 'white',
    },
    activeTabStyle: {
      backgroundColor: '#0076FF',
    },
    tabTextStyle: {
      color: '#0076FF',
    },
    activeTabTextStyle: {
      color: 'white',
    },
    tabBadgeContainerStyle: {
      borderRadius: 20,
      backgroundColor: 'red',
      paddingLeft: 5,
      paddingRight: 5,
      marginLeft: 5,
      marginBottom: 3,
    },
    activeTabBadgeContainerStyle: {
      backgroundColor: 'white',
    },
    tabBadgeStyle: {
      color: 'white',
      fontSize: 11,
      fontWeight: 'bold',
    },
    activeTabBadgeStyle: {
      color: 'black',
    },
  }),
  s = (function (u) {
    module13.default(p, u);

    var s = p,
      S = y(),
      T = function () {
        var e,
          t = module17.default(s);

        if (S) {
          var l = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, l);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function p() {
      module7.default(this, p);
      return T.apply(this, arguments);
    }

    module8.default(p, [
      {
        key: 'render',
        value: function () {
          var e = this.props,
            t = e.isTabActive,
            l = e.index,
            n = e.badge,
            o = e.text,
            u = e.firstTabStyle,
            y = e.lastTabStyle,
            s = e.tabStyle,
            S = e.activeTabStyle,
            T = e.tabTextStyle,
            p = e.activeTabTextStyle,
            v = e.tabBadgeContainerStyle,
            B = e.activeTabBadgeContainerStyle,
            h = e.tabBadgeStyle,
            x = e.activeTabBadgeStyle,
            O = e.onTabPress,
            w = e.textNumberOfLines,
            C = e.allowFontScaling,
            P = e.accessible,
            F = e.activeTabOpacity,
            k = e.accessibilityLabel,
            j = e.testID,
            L = e.enabled;
          return module125.default.createElement(
            ReactNative.TouchableOpacity,
            {
              style: [f.tabStyle, s, t ? [f.activeTabStyle, S] : {}, u, y],
              accessible: P,
              testID: j,
              accessibilityLabel: k,
              accessibilityTraits: t ? 'selected' : 'button',
              accessibilityComponentType: 'button',
              onPress: function () {
                return O(l);
              },
              disabled: !L,
              activeOpacity: F,
            },
            module125.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: 'row',
                },
              },
              module125.default.createElement(
                ReactNative.Text,
                {
                  style: [f.tabTextStyle, T, t ? [f.activeTabTextStyle, p] : {}],
                  numberOfLines: w,
                  allowFontScaling: C,
                  ellipsizeMode: 'tail',
                },
                o
              ),
              Boolean(n) &&
                module125.default.createElement(
                  ReactNative.View,
                  {
                    style: [f.tabBadgeContainerStyle, v, t ? [f.activeTabBadgeContainerStyle, B] : {}],
                  },
                  module125.default.createElement(
                    ReactNative.Text,
                    {
                      style: [f.tabBadgeStyle, h, t ? [f.activeTabBadgeStyle, x] : {}],
                      allowFontScaling: C,
                    },
                    n
                  )
                )
            )
          );
        },
      },
    ]);
    return p;
  })(module125.PureComponent);

exports.default = s;
s.defaultProps = {
  isTabActive: false,
  index: 0,
  badge: '',
  firstTabStyle: {},
  lastTabStyle: {},
  tabStyle: {},
  activeTabStyle: {},
  tabTextStyle: {},
  activeTabTextStyle: {},
  tabBadgeContainerStyle: {},
  activeTabBadgeContainerStyle: {},
  tabBadgeStyle: {},
  activeTabBadgeStyle: {},
  textNumberOfLines: 1,
  allowFontScaling: false,
  accessible: true,
  activeTabOpacity: 1,
  accessibilityLabel: '',
  testID: '',
  enabled: false,
  onTabPress: function () {},
};
