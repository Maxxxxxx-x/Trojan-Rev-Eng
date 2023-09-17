var ReactNative = require('react-native');

exports.default = function (n) {
  return ReactNative.StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: n.toast_zindex,
    },
    innerContainer: {
      backgroundColor: 'transparent',
    },
    innerWrap: {
      alignItems: 'center',
      backgroundColor: n.toast_fill,
      minWidth: 100,
    },
    iconToast: {
      borderRadius: n.radius_lg,
      padding: n.v_spacing_lg,
    },
    textToast: {
      borderRadius: n.radius_sm,
      paddingVertical: n.v_spacing_md,
      paddingHorizontal: n.v_spacing_lg,
    },
    content: {
      color: n.color_text_base_inverse,
      fontSize: n.font_size_subhead,
    },
    image: {
      marginBottom: n.v_spacing_xs,
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: n.v_spacing_md,
    },
  });
};
