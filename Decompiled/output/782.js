var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var b = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (b && (b.get || b.set)) Object.defineProperty(l, s, b);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('./125')),
  module783 = require('@babel/runtime/helpers/interopRequireDefault')(require('./783')),
  module784 = require('@babel/runtime/helpers/interopRequireDefault')(require('./784')),
  s = ['id', 'initialRouteName', 'backBehavior', 'children', 'screenListeners', 'screenOptions', 'sceneContainerStyle'],
  b = ['lazy', 'tabBarOptions'];

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

var module463 = require('./463').createNavigatorFactory(function (u) {
  var p,
    f = u.id,
    v = u.initialRouteName,
    y = u.backBehavior,
    B = u.children,
    O = u.screenListeners,
    S = u.screenOptions,
    h = u.sceneContainerStyle,
    k = module96.default(u, s),
    C = k.lazy,
    w = k.tabBarOptions,
    j = module96.default(k, b),
    N = {};

  if (w) {
    Object.assign(N, {
      tabBarHideOnKeyboard: w.keyboardHidesTabBar,
      tabBarActiveTintColor: w.activeTintColor,
      tabBarInactiveTintColor: w.inactiveTintColor,
      tabBarActiveBackgroundColor: w.activeBackgroundColor,
      tabBarInactiveBackgroundColor: w.inactiveBackgroundColor,
      tabBarAllowFontScaling: w.allowFontScaling,
      tabBarShowLabel: w.showLabel,
      tabBarLabelStyle: w.labelStyle,
      tabBarIconStyle: w.iconStyle,
      tabBarItemStyle: w.tabStyle,
      tabBarLabelPosition: null != (p = w.labelPosition) ? p : false === w.adaptive ? 'below-icon' : undefined,
      tabBarStyle: [
        {
          display: w.tabBarVisible ? 'none' : 'flex',
        },
        N.tabBarStyle,
      ],
    });
    Object.keys(N).forEach(function (t) {
      if (undefined === N[t]) delete N[t];
    });
    module783.default(
      w,
      "Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead.\n\nPlace the following in 'screenOptions' in your code to keep current behavior:\n\n" +
        JSON.stringify(N, null, 2) +
        '\n\nSee https://reactnavigation.org/docs/bottom-tab-navigator#options for more details.'
    );
  }

  if ('boolean' == typeof C) {
    N.lazy = C;
    module783.default(
      true,
      "Bottom Tab Navigator: 'lazy' in props is deprecated. Move it to 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/bottom-tab-navigator/#lazy for more details."
    );
  }

  var module463 = require('./463').useNavigationBuilder(require('./463').TabRouter, {
      id: f,
      initialRouteName: v,
      backBehavior: y,
      children: B,
      screenListeners: O,
      screenOptions: S,
      defaultScreenOptions: N,
    }),
    T = module463.state,
    L = module463.descriptors,
    M = module463.navigation,
    _ = module463.NavigationContent;

  return module125.createElement(
    _,
    null,
    module125.createElement(
      module784.default,
      module178.default({}, j, {
        state: T,
        navigation: M,
        descriptors: L,
        sceneContainerStyle: h,
      })
    )
  );
});

exports.default = module463;
