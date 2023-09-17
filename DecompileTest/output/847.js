exports.processFonts = function (o) {
  var t,
    u = null == (t = module148.default.fontFamily) ? undefined : t.process;
  if ('function' == typeof u) return o.map(u);
  return o;
};

var module148 = require('@babel/runtime/helpers/interopRequireDefault')(require('./148'));
