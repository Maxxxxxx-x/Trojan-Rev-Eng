var n,
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module5 = require('@babel/runtime/helpers/interopRequireDefault')(require('./5')),
  module4 = require('@babel/runtime/helpers/interopRequireDefault')(require('./4')),
  module162 = require('@babel/runtime/helpers/interopRequireDefault')(require('./162')),
  module20 = require('@babel/runtime/helpers/interopRequireDefault')(require('./20')),
  f = new module5.default(),
  v = false,
  h = (function () {
    function o() {
      module7.default(this, o);
    }

    module8.default(o, null, [
      {
        key: 'get',
        value: function (t) {
          module20.default(n[t], 'No dimension set for key ' + t);
          return n[t];
        },
      },
      {
        key: 'set',
        value: function (t) {
          var s = t.screen,
            o = t.window,
            l = t.windowPhysicalPixels;
          if (l)
            o = {
              width: l.width / l.scale,
              height: l.height / l.scale,
              scale: l.scale,
              fontScale: l.fontScale,
            };
          var c = t.screenPhysicalPixels;
          if (c)
            s = {
              width: c.width / c.scale,
              height: c.height / c.scale,
              scale: c.scale,
              fontScale: c.fontScale,
            };
          else if (null == s) s = o;
          n = {
            window: o,
            screen: s,
          };
          if (v) f.emit('change', n);
          else v = true;
        },
      },
      {
        key: 'addEventListener',
        value: function (n, t) {
          module20.default('change' === n, 'Trying to subscribe to unknown event: "%s"', n);
          return f.addListener(n, t);
        },
      },
      {
        key: 'removeEventListener',
        value: function (n, t) {
          module20.default('change' === n, 'Trying to remove listener for unknown event: "%s"', n);
          f.removeListener(n, t);
        },
      },
    ]);
    return o;
  })(),
  w = globals.nativeExtensions && globals.nativeExtensions.DeviceInfo && globals.nativeExtensions.DeviceInfo.Dimensions;

if (!w) {
  module4.default.addListener('didUpdateDimensions', function (n) {
    h.set(n);
  });
  w = module162.default.getConstants().Dimensions;
}

h.set(w);
module.exports = h;
