var ReactNative = require('react-native');

exports.default = function (o) {
  return ReactNative.StyleSheet.create({
    pagination: {
      position: 'absolute',
      alignItems: 'center',
    },
    paginationX: {
      bottom: 10,
      left: 0,
      right: 0,
    },
    paginationY: {
      right: 10,
      top: 0,
      bottom: 0,
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: o.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: o.h_spacing_sm / 2,
      marginVertical: o.v_spacing_sm / 2,
    },
    wrapperStyle: {
      overflow: 'hidden',
    },
  });
};
