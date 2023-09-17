var module148 = require('@babel/runtime/helpers/interopRequireDefault')(require('./148')),
  module138 = {
    topAccessibilityAction: {
      registrationName: 'onAccessibilityAction',
    },
    topAccessibilityTap: {
      registrationName: 'onAccessibilityTap',
    },
    topMagicTap: {
      registrationName: 'onMagicTap',
    },
    topAccessibilityEscape: {
      registrationName: 'onAccessibilityEscape',
    },
    topLayout: {
      registrationName: 'onLayout',
    },
    onGestureHandlerEvent: require('./138').DynamicallyInjectedByGestureHandler({
      registrationName: 'onGestureHandlerEvent',
    }),
    onGestureHandlerStateChange: require('./138').DynamicallyInjectedByGestureHandler({
      registrationName: 'onGestureHandlerStateChange',
    }),
  },
  module134 = {
    accessible: true,
    accessibilityActions: true,
    accessibilityLabel: true,
    accessibilityHint: true,
    accessibilityLanguage: true,
    accessibilityValue: true,
    accessibilityViewIsModal: true,
    accessibilityElementsHidden: true,
    accessibilityIgnoresInvertColors: true,
    testID: true,
    backgroundColor: {
      process: require('./134'),
    },
    backfaceVisibility: true,
    opacity: true,
    shadowColor: {
      process: require('./134'),
    },
    shadowOffset: {
      diff: require('./133'),
    },
    shadowOpacity: true,
    shadowRadius: true,
    needsOffscreenAlphaCompositing: true,
    overflow: true,
    shouldRasterizeIOS: true,
    transform: {
      diff: require('./151'),
    },
    accessibilityRole: true,
    accessibilityState: true,
    nativeID: true,
    pointerEvents: true,
    removeClippedSubviews: true,
    borderRadius: true,
    borderColor: {
      process: require('./134'),
    },
    borderWidth: true,
    borderStyle: true,
    hitSlop: {
      diff: require('./153'),
    },
    collapsable: true,
    borderTopWidth: true,
    borderTopColor: {
      process: require('./134'),
    },
    borderRightWidth: true,
    borderRightColor: {
      process: require('./134'),
    },
    borderBottomWidth: true,
    borderBottomColor: {
      process: require('./134'),
    },
    borderLeftWidth: true,
    borderLeftColor: {
      process: require('./134'),
    },
    borderStartWidth: true,
    borderStartColor: {
      process: require('./134'),
    },
    borderEndWidth: true,
    borderEndColor: {
      process: require('./134'),
    },
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    borderTopEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderBottomEndRadius: true,
    display: true,
    zIndex: true,
    top: true,
    right: true,
    start: true,
    end: true,
    bottom: true,
    left: true,
    width: true,
    height: true,
    minWidth: true,
    maxWidth: true,
    minHeight: true,
    maxHeight: true,
    marginTop: true,
    marginRight: true,
    marginBottom: true,
    marginLeft: true,
    marginStart: true,
    marginEnd: true,
    marginVertical: true,
    marginHorizontal: true,
    margin: true,
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true,
    paddingStart: true,
    paddingEnd: true,
    paddingVertical: true,
    paddingHorizontal: true,
    padding: true,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    flexBasis: true,
    flexDirection: true,
    flexWrap: true,
    justifyContent: true,
    alignItems: true,
    alignSelf: true,
    alignContent: true,
    position: true,
    aspectRatio: true,
    direction: true,
    style: module148.default,
  },
  module138 = require('./138').ConditionallyIgnoredEventHandlers({
    onLayout: true,
    onMagicTap: true,
    onAccessibilityAction: true,
    onAccessibilityEscape: true,
    onAccessibilityTap: true,
    onMoveShouldSetResponder: true,
    onMoveShouldSetResponderCapture: true,
    onStartShouldSetResponder: true,
    onStartShouldSetResponderCapture: true,
    onResponderGrant: true,
    onResponderReject: true,
    onResponderStart: true,
    onResponderEnd: true,
    onResponderRelease: true,
    onResponderMove: true,
    onResponderTerminate: true,
    onResponderTerminationRequest: true,
    onShouldBlockNativeResponder: true,
    onTouchStart: true,
    onTouchMove: true,
    onTouchEnd: true,
    onTouchCancel: true,
    onPointerUp: true,
    onPointerDown: true,
    onPointerCancel: true,
    onPointerEnter2: true,
    onPointerMove2: true,
    onPointerLeave2: true,
  }),
  p = {
    bubblingEventTypes: {
      topPress: {
        phasedRegistrationNames: {
          bubbled: 'onPress',
          captured: 'onPressCapture',
        },
      },
      topChange: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture',
        },
      },
      topFocus: {
        phasedRegistrationNames: {
          bubbled: 'onFocus',
          captured: 'onFocusCapture',
        },
      },
      topBlur: {
        phasedRegistrationNames: {
          bubbled: 'onBlur',
          captured: 'onBlurCapture',
        },
      },
      topSubmitEditing: {
        phasedRegistrationNames: {
          bubbled: 'onSubmitEditing',
          captured: 'onSubmitEditingCapture',
        },
      },
      topEndEditing: {
        phasedRegistrationNames: {
          bubbled: 'onEndEditing',
          captured: 'onEndEditingCapture',
        },
      },
      topKeyPress: {
        phasedRegistrationNames: {
          bubbled: 'onKeyPress',
          captured: 'onKeyPressCapture',
        },
      },
      topTouchStart: {
        phasedRegistrationNames: {
          bubbled: 'onTouchStart',
          captured: 'onTouchStartCapture',
        },
      },
      topTouchMove: {
        phasedRegistrationNames: {
          bubbled: 'onTouchMove',
          captured: 'onTouchMoveCapture',
        },
      },
      topTouchCancel: {
        phasedRegistrationNames: {
          bubbled: 'onTouchCancel',
          captured: 'onTouchCancelCapture',
        },
      },
      topTouchEnd: {
        phasedRegistrationNames: {
          bubbled: 'onTouchEnd',
          captured: 'onTouchEndCapture',
        },
      },
      topPointerCancel: {
        phasedRegistrationNames: {
          captured: 'onPointerCancelCapture',
          bubbled: 'onPointerCancel',
        },
      },
      topPointerDown: {
        phasedRegistrationNames: {
          captured: 'onPointerDownCapture',
          bubbled: 'onPointerDown',
        },
      },
      topPointerMove2: {
        phasedRegistrationNames: {
          captured: 'onPointerMove2Capture',
          bubbled: 'onPointerMove2',
        },
      },
      topPointerUp: {
        phasedRegistrationNames: {
          captured: 'onPointerUpCapture',
          bubbled: 'onPointerUp',
        },
      },
      topPointerEnter2: {
        phasedRegistrationNames: {
          captured: 'onPointerEnter2Capture',
          bubbled: 'onPointerEnter2',
          skipBubbling: true,
        },
      },
      topPointerLeave2: {
        phasedRegistrationNames: {
          captured: 'onPointerLeave2Capture',
          bubbled: 'onPointerLeave2',
          skipBubbling: true,
        },
      },
    },
    directEventTypes: module138,
    validAttributes: Object.assign({}, module134, module138),
  };

exports.default = p;
