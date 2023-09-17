var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module739 = require('@babel/runtime/helpers/interopRequireDefault')(require('./739')),
  s = ['onValueChange', 'onSlidingStart', 'onSlidingComplete', 'onAccessibilityAction'],
  c = this,
  S = Number.MIN_SAFE_INTEGER,
  b = Number.MAX_SAFE_INTEGER,
  f = module125.default.forwardRef(function (f, v) {
    var h,
      y = ReactNative.StyleSheet.compose(f.style, p.slider),
      C = f.onValueChange,
      N = f.onSlidingStart,
      _ = f.onSlidingComplete,
      A = f.onAccessibilityAction,
      E = module96.default(f, s),
      L = C
        ? function (t) {
            C(t.nativeEvent.value);
          }
        : null,
      R = 'boolean' == typeof f.disabled ? f.disabled : true === (null == (h = f.accessibilityState) ? undefined : h.disabled),
      I =
        'boolean' == typeof f.disabled
          ? Object.assign({}, f.accessibilityState, {
              disabled: f.disabled,
            })
          : f.accessibilityState,
      w = N
        ? function (t) {
            N(t.nativeEvent.value);
          }
        : null,
      P = _
        ? function (t) {
            _(t.nativeEvent.value);
          }
        : null,
      V = A
        ? function (t) {
            A(t);
          }
        : null,
      O = E.lowerLimit || 0 === E.lowerLimit ? E.lowerLimit : S,
      T = E.upperLimit || 0 === E.upperLimit ? E.upperLimit : b;
    return module125.default.createElement(
      module739.default,
      module178.default({}, E, {
        lowerLimit: O,
        upperLimit: T,
        accessibilityState: I,
        thumbImage: 'web' === ReactNative.Platform.OS ? f.thumbImage : f.thumbImage ? ReactNative.Image.resolveAssetSource(f.thumbImage) : undefined,
        ref: v,
        style: y,
        onChange: L,
        onRNCSliderSlidingStart: w,
        onRNCSliderSlidingComplete: P,
        onRNCSliderValueChange: L,
        disabled: R,
        onStartShouldSetResponder: function () {
          return true;
        },
        onResponderTerminationRequest: function () {
          return false;
        },
        onRNCSliderAccessibilityAction: V,
        __self: c,
        __source: {
          fileName: 'C:\\Dev\\Projects\\react-native-slider\\package\\src\\Slider.tsx',
          lineNumber: 248,
          columnNumber: 5,
        },
      })
    );
  });

f.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  inverted: false,
  tapToSeek: false,
  lowerLimit: S,
  upperLimit: b,
};
var p = ReactNative.StyleSheet.create(
    'ios' === ReactNative.Platform.OS
      ? {
          slider: {
            height: 40,
          },
        }
      : {
          slider: {},
        }
  ),
  v = f;
exports.default = v;
