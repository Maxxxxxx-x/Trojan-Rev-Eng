var ReactNative = require('react-native');

exports.default = function (o) {
  return ReactNative.StyleSheet.create({
    result: {
      alignItems: 'center',
      paddingVertical: o.v_spacing_xl,
      backgroundColor: o.fill_base,
      borderBottomColor: o.border_color_base,
    },
    imgWrap: {
      margin: 0,
    },
    img: {
      width: 60,
      height: 60,
    },
    title: {
      marginTop: o.v_spacing_lg,
      paddingHorizontal: o.h_spacing_lg,
    },
    titleText: {
      fontSize: 21,
      color: o.color_text_base,
    },
    message: {
      marginTop: o.v_spacing_lg,
      paddingHorizontal: o.h_spacing_lg,
    },
    messageText: {
      fontSize: o.font_size_caption,
      color: o.color_text_caption,
    },
    buttonWrap: {
      flexDirection: 'row',
      marginTop: o.v_spacing_lg,
      paddingHorizontal: o.h_spacing_lg,
    },
    button: {
      flex: 1,
    },
  });
};
