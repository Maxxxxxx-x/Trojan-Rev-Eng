var ReactNative = require('react-native');

exports.default = function (t) {
  return ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    defaultHighlight: {
      backgroundColor: t.fill_tap,
      borderColor: t.border_color_base,
    },
    primaryHighlight: {
      backgroundColor: t.primary_button_fill_tap,
      borderColor: t.primary_button_fill,
    },
    ghostHighlight: {
      backgroundColor: 'transparent',
      borderColor: t.ghost_button_fill_tap,
    },
    warningHighlight: {
      backgroundColor: t.warning_button_fill_tap,
      borderColor: t.warning_button_fill,
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: t.radius_md,
      borderWidth: 1,
    },
    largeRaw: {
      height: t.button_height,
      paddingLeft: t.h_spacing_lg,
      paddingRight: t.h_spacing_lg,
    },
    smallRaw: {
      height: t.button_height_sm,
      paddingLeft: t.h_spacing_sm,
      paddingRight: t.h_spacing_sm,
    },
    defaultRaw: {
      backgroundColor: t.fill_base,
      borderColor: t.border_color_base,
    },
    primaryRaw: {
      backgroundColor: t.primary_button_fill,
      borderColor: t.primary_button_fill,
    },
    ghostRaw: {
      backgroundColor: 'transparent',
      borderColor: t.ghost_button_color,
    },
    warningRaw: {
      backgroundColor: t.warning_button_fill,
      borderColor: t.warning_button_fill,
    },
    defaultDisabledRaw: {
      backgroundColor: t.fill_disabled,
      borderColor: t.fill_disabled,
    },
    primaryDisabledRaw: {
      opacity: 0.4,
    },
    ghostDisabledRaw: {
      borderColor: ''.concat(t.color_text_base, '1A'),
    },
    warningDisabledRaw: {
      opacity: 0.4,
    },
    defaultHighlightText: {
      color: t.color_text_base,
    },
    primaryHighlightText: {
      color: ''.concat(t.color_text_base_inverse, '4D'),
    },
    ghostHighlightText: {
      color: t.ghost_button_fill_tap,
    },
    warningHighlightText: {
      color: ''.concat(t.color_text_base_inverse, '4D'),
    },
    largeRawText: {
      fontSize: t.button_font_size,
    },
    smallRawText: {
      fontSize: t.button_font_size_sm,
    },
    defaultRawText: {
      color: t.color_text_base,
    },
    primaryRawText: {
      color: t.color_text_base_inverse,
    },
    ghostRawText: {
      color: t.ghost_button_color,
    },
    warningRawText: {
      color: t.color_text_base_inverse,
    },
    defaultDisabledRawText: {
      color: ''.concat(t.color_text_base, '4D'),
    },
    primaryDisabledRawText: {
      color: ''.concat(t.color_text_base_inverse, '99'),
    },
    ghostDisabledRawText: {
      color: ''.concat(t.color_text_base, '1A'),
    },
    warningDisabledRawText: {
      color: ''.concat(t.color_text_base_inverse, '99'),
    },
    indicator: {
      marginRight: t.h_spacing_md,
    },
  });
};
