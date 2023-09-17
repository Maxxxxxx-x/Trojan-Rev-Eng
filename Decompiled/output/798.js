exports.default = function (c) {
  c.route;
  var s = c.horizontal,
    u = c.badge,
    f = c.badgeStyle,
    y = c.activeOpacity,
    b = c.inactiveOpacity,
    p = c.activeTintColor,
    v = c.inactiveTintColor,
    h = c.renderIcon,
    z = c.style;
  return module125.default.createElement(
    ReactNative.View,
    {
      style: [s ? n.iconHorizontal : n.iconVertical, z],
    },
    module125.default.createElement(
      ReactNative.View,
      {
        style: [
          n.icon,
          {
            opacity: y,
          },
        ],
      },
      h({
        focused: true,
        size: 25,
        color: p,
      })
    ),
    module125.default.createElement(
      ReactNative.View,
      {
        style: [
          n.icon,
          {
            opacity: b,
          },
        ],
      },
      h({
        focused: false,
        size: 25,
        color: v,
      })
    ),
    module125.default.createElement(
      module799.default,
      {
        visible: null != u,
        style: [n.badge, s ? n.badgeHorizontal : n.badgeVertical, f],
        size: 18.75,
      },
      u
    )
  );
};

var module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module799 = require('@babel/runtime/helpers/interopRequireDefault')(require('./799'));

var n = ReactNative.StyleSheet.create({
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    minWidth: 25,
  },
  iconVertical: {
    flex: 1,
  },
  iconHorizontal: {
    height: '100%',
    marginTop: 3,
  },
  badge: {
    position: 'absolute',
    left: 3,
  },
  badgeVertical: {
    top: 3,
  },
  badgeHorizontal: {
    top: 7,
  },
});
