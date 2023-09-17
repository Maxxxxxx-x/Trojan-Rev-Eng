var ReactNative = require('react-native'),
  n = ReactNative.NativeModules.ImageResizerAndroid;

function t(o) {
  var n = o.mode || 'contain',
    t = ['contain', 'cover', 'stretch'];
  if (-1 === t.indexOf(n)) throw new Error('createResizedImage\'s options.mode must be one of "' + t.join('", "') + '"');
  if (o.onlyScaleDown && 'boolean' != typeof o.onlyScaleDown) throw new Error("createResizedImage's option.onlyScaleDown must be a boolean: got " + o.onlyScaleDown);
  return {
    mode: n,
    onlyScaleDown: !!o.onlyScaleDown,
  };
}

var l =
  'android' === ReactNative.Platform.OS
    ? {
        createResizedImage: function (o, l, c, s, u) {
          var f = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : 0,
            v = arguments.length > 6 ? arguments[6] : undefined,
            w = arguments.length > 7 && undefined !== arguments[7] && arguments[7],
            h = t(arguments.length > 8 && undefined !== arguments[8] ? arguments[8] : {});
          return new Promise(function (t, y) {
            n.createResizedImage(o, l, c, s, u, f, v, w, h, t, y);
          });
        },
      }
    : {
        createResizedImage: function (n, l, c, s, u) {
          var f = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : 0,
            v = arguments.length > 6 ? arguments[6] : undefined,
            w = arguments.length > 7 && undefined !== arguments[7] && arguments[7],
            h = arguments.length > 8 && undefined !== arguments[8] ? arguments[8] : {};
          if ('JPEG' !== s && 'PNG' !== s) throw new Error('Only JPEG and PNG format are supported by createResizedImage');
          var y = t(h);
          return new Promise(function (t, h) {
            ReactNative.NativeModules.ImageResizer.createResizedImage(n, l, c, s, u, f, v, w, y, function (o, n) {
              if (o) return h(o);
              t(n);
            });
          });
        },
      };
exports.default = l;
