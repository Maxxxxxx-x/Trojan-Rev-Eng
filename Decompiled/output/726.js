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
    var n = b(t);
    if (n && n.has(e)) return n.get(e);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in e)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
        var s = o ? Object.getOwnPropertyDescriptor(e, c) : null;
        if (s && (s.get || s.set)) Object.defineProperty(l, c, s);
        else l[c] = e[c];
      }

    l.default = e;
    if (n) n.set(e, l);
    return l;
  })(require('./125')),
  ReactNative = require('react-native'),
  module727 = require('@babel/runtime/helpers/interopRequireDefault')(require('./727'));

function b(e) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (b = function (e) {
    return e ? n : t;
  })(e);
}

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

var y = ReactNative.StyleSheet.create({
    tabsContainerStyle: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
    },
    tabStyle: {
      paddingVertical: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#0076FF',
      borderWidth: 1,
      backgroundColor: 'white',
    },
  }),
  p = function (e, t, n, l) {
    if (t) l(e);
    else if (n !== e) l(e);
  },
  S = function (e, t) {
    return e && e.length > 0 && e[t] ? e[t] : undefined;
  },
  v = function (e, t) {
    return e && e.length > 0 && e[t] ? e[t] : undefined;
  },
  T = (function (b) {
    module13.default(O, b);

    var T = O,
      h = f(),
      C = function () {
        var e,
          t = module17.default(T);

        if (h) {
          var n = module17.default(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return module15.default(this, e);
      };

    function O() {
      module7.default(this, O);
      return C.apply(this, arguments);
    }

    module8.default(O, [
      {
        key: 'render',
        value: function () {
          var e = this.props,
            t = e.multiple,
            n = e.selectedIndex,
            l = e.selectedIndices,
            o = e.values,
            b = e.badges,
            f = e.borderRadius,
            T = e.tabsContainerStyle,
            h = e.tabsContainerDisableStyle,
            C = e.tabStyle,
            O = e.firstTabStyle,
            x = e.lastTabStyle,
            B = e.activeTabStyle,
            R = e.tabTextStyle,
            w = e.activeTabTextStyle,
            P = e.tabBadgeContainerStyle,
            L = e.activeTabBadgeContainerStyle,
            j = e.tabBadgeStyle,
            D = e.activeTabBadgeStyle,
            I = e.onTabPress,
            W = e.textNumberOfLines,
            k = e.allowFontScaling,
            _ = e.accessible,
            F = e.accessibilityLabels,
            M = e.testIDs,
            N = e.activeTabOpacity,
            E = e.enabled,
            V = [
              {
                borderRightWidth: o && 2 === o.length ? 1 : 0,
                borderTopLeftRadius: f,
                borderBottomLeftRadius: f,
              },
            ],
            A = [
              {
                borderLeftWidth: 0,
                borderTopRightRadius: f,
                borderBottomRightRadius: f,
              },
            ],
            q = [y.tabsContainerStyle, T];
          if (!E) q.push(h);
          return module125.default.createElement(
            ReactNative.View,
            {
              style: q,
              removeClippedSubviews: false,
            },
            o &&
              o.map(function (e, s) {
                var f = S(F, s),
                  y = v(M, s);
                return module125.default.createElement(module727.default, {
                  key: e,
                  index: s,
                  badge: !(!b || !b[s]) && b[s],
                  isTabActive: t ? l.includes(s) : n === s,
                  text: e,
                  textNumberOfLines: W,
                  onTabPress: function (e) {
                    return p(e, t, n, I);
                  },
                  firstTabStyle:
                    0 === s
                      ? [
                          {
                            borderRightWidth: 0,
                          },
                          V,
                          O,
                        ]
                      : {},
                  lastTabStyle:
                    s === o.length - 1
                      ? [
                          {
                            borderLeftWidth: 0,
                          },
                          A,
                          x,
                        ]
                      : {},
                  tabStyle: [
                    C,
                    0 !== s && s !== o.length - 1
                      ? {
                          marginLeft: -1,
                        }
                      : {},
                  ],
                  activeTabStyle: B,
                  tabTextStyle: R,
                  activeTabTextStyle: w,
                  tabBadgeContainerStyle: P,
                  activeTabBadgeContainerStyle: L,
                  tabBadgeStyle: j,
                  activeTabBadgeStyle: D,
                  allowFontScaling: k,
                  activeTabOpacity: N,
                  accessible: _,
                  accessibilityLabel: f || e,
                  testID: y || e,
                  enabled: E,
                });
              })
          );
        },
      },
    ]);
    return O;
  })(module125.PureComponent);

exports.default = T;
T.defaultProps = {};
T.defaultProps = {
  values: ['One', 'Two', 'Three'],
  accessible: true,
  accessibilityLabels: [],
  testIDs: [],
  badges: ['', '', ''],
  multiple: false,
  selectedIndex: 0,
  selectedIndices: [0],
  onTabPress: function () {},
  tabsContainerStyle: {},
  tabsContainerDisableStyle: {
    opacity: 0.6,
  },
  tabStyle: {},
  firstTabStyle: {},
  lastTabStyle: {},
  activeTabStyle: {},
  tabTextStyle: {},
  activeTabTextStyle: {},
  tabBadgeContainerStyle: {},
  activeTabBadgeContainerStyle: {},
  tabBadgeStyle: {},
  activeTabBadgeStyle: {},
  borderRadius: 5,
  textNumberOfLines: 1,
  allowFontScaling: true,
  activeTabOpacity: 1,
  enabled: true,
};
