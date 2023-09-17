var module160 = require('./160').roundToNearestPixel(0.4);

if (0 === module160) module160 = 1 / require('./160').get();
var o = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
module.exports = {
  hairlineWidth: module160,
  absoluteFill: o,
  absoluteFillObject: o,
  compose: function (t, o) {
    return null != t && null != o ? [t, o] : null != t ? t : o;
  },
  flatten: require('./170'),
  setStyleAttributePreprocessor: function (t, o) {
    var l;
    if (true === require('./148')[t])
      l = {
        process: o,
      };
    else {
      if ('object' != typeof require('./148')[t]) return void console.error(t + ' is not a valid style attribute');
      l = Object.assign({}, require('./148')[t], {
        process: o,
      });
    }
    require('./148')[t] = l;
  },
  create: function (t) {
    return t;
  },
};
