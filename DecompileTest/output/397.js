var ReactNative = require('react-native');

exports.default = function (t) {
  return ReactNative.StyleSheet.create({
    container: {
      zIndex: t.modal_zindex,
    },
    wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    popupContainer: {},
    popupSlideUp: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    popupSlideDown: {},
    innerContainer: {
      borderRadius: t.radius_md,
      width: 286,
      paddingTop: t.v_spacing_xl,
      overflow: 'hidden',
      backgroundColor: t.fill_base,
    },
    footer: {},
    header: {
      fontSize: t.modal_font_size_heading,
      color: t.color_text_base,
      textAlign: 'center',
      paddingHorizontal: t.h_spacing_lg,
    },
    body: {
      paddingTop: 0,
      paddingBottom: t.v_spacing_lg,
      paddingHorizontal: t.h_spacing_lg,
    },
    maskClosable: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
    },
    closeWrap: {
      position: 'absolute',
      top: t.v_spacing_xl,
      left: t.h_spacing_lg,
    },
    close: {
      fontSize: 40,
      fontWeight: '200',
      color: '#bcbcbc',
      lineHeight: 30,
    },
    buttonGroupH: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    buttonGroupV: {
      flexGrow: 1,
      flexDirection: 'column',
    },
    buttonWrapH: {
      height: t.modal_button_height,
      flexGrow: 1,
      justifyContent: 'center',
      borderColor: t.border_color_base,
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
      borderRightWidth: ReactNative.StyleSheet.hairlineWidth,
      paddingVertical: 11,
    },
    buttonWrapV: {
      flexGrow: 1,
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
      borderColor: t.border_color_base,
      paddingVertical: 11,
    },
    buttonText: {
      textAlign: 'center',
      color: t.color_link,
      fontSize: t.modal_button_font_size,
      backgroundColor: 'transparent',
    },
    operationContainer: {
      paddingTop: 0,
    },
    operationBody: {
      paddingBottom: 0,
      paddingHorizontal: 0,
    },
    buttonTextOperation: {
      color: t.color_text_base,
      textAlign: 'left',
      paddingHorizontal: 15,
    },
  });
};
