var ReactNative = require('react-native');

exports.default = function (t) {
  return ReactNative.StyleSheet.create({
    underlayColor: {
      backgroundColor: t.fill_tap,
    },
    Header: {
      fontSize: t.font_size_base,
      color: t.color_text_caption,
      paddingHorizontal: t.h_spacing_lg,
      paddingTop: t.v_spacing_lg,
      paddingBottom: t.v_spacing_md,
      backgroundColor: t.fill_body,
    },
    Footer: {
      fontSize: t.font_size_base,
      color: t.color_text_caption,
      paddingHorizontal: t.h_spacing_lg,
      paddingVertical: t.v_spacing_md,
      backgroundColor: t.fill_body,
    },
    Body: {
      backgroundColor: t.fill_base,
      borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
      borderTopColor: t.border_color_base,
    },
    BodyBottomLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 1,
      backgroundColor: t.fill_base,
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      borderBottomColor: t.border_color_base,
    },
    Item: {
      flexGrow: 1,
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: t.h_spacing_lg,
      backgroundColor: t.fill_base,
    },
    Line: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: t.h_spacing_lg,
      paddingVertical: t.v_spacing_sm,
      minHeight: t.list_item_height,
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      borderBottomColor: t.border_color_base,
    },
    Thumb: {
      width: t.icon_size_md,
      height: t.icon_size_md,
      marginRight: t.h_spacing_lg,
    },
    Content: {
      color: t.color_text_base,
      fontSize: t.font_size_heading,
      textAlignVertical: 'center',
    },
    Extra: {
      color: t.color_text_caption,
      fontSize: t.font_size_heading,
      textAlign: 'right',
      textAlignVertical: 'center',
    },
    Brief: {
      minHeight: t.font_size_icontext,
    },
    BriefText: {
      color: t.color_text_caption,
      fontSize: t.font_size_subhead,
      paddingTop: t.v_spacing_xs,
      textAlignVertical: 'center',
    },
    Arrow: {
      marginLeft: t.h_spacing_md,
      marginTop: t.v_spacing_xs,
    },
    ArrowV: {
      marginLeft: t.h_spacing_md,
    },
    multipleLine: {
      paddingVertical: t.v_spacing_sm,
    },
    multipleThumb: {
      width: t.icon_size_lg,
      height: t.icon_size_lg,
    },
    column: {
      flex: 1,
      flexDirection: 'column',
    },
  });
};
