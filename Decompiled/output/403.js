var ReactNative = require('react-native');

exports.default = function (o) {
  return ReactNative.StyleSheet.create({
    message: {
      marginTop: o.v_spacing_lg,
      color: o.color_text_caption,
      fontSize: o.font_size_base,
      textAlign: 'center',
    },
    inputGroup: {
      marginTop: o.v_spacing_md,
      flexDirection: 'column',
    },
    inputWrapper: {
      borderWidth: ReactNative.StyleSheet.hairlineWidth,
      borderTopWidth: 0,
      borderColor: o.border_color_base,
    },
    input: {
      height: 36,
      fontSize: o.font_size_base,
      paddingHorizontal: o.h_spacing_sm,
      paddingVertical: 0,
    },
    inputFirst: {
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
      borderTopLeftRadius: o.radius_sm,
      borderTopRightRadius: o.radius_sm,
    },
    inputLast: {
      borderBottomLeftRadius: o.radius_sm,
      borderBottomRightRadius: o.radius_sm,
    },
  });
};
