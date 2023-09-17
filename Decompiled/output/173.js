var module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17'));

function l() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var module174 = (function (f) {
  module13.default(b, f);

  var o = b,
    s = l(),
    v = function () {
      var e,
        t = module17.default(o);

      if (s) {
        var u = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, u);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function b(e, u) {
    var n;
    module7.default(this, b);
    var c = u.bubbles,
      l = u.cancelable,
      f = u.composed;
    (n = v.call(this, e, {
      bubbles: c,
      cancelable: l,
      composed: f,
    })).detail = u.detail;
    return n;
  }

  return module8.default(b);
})(require('@babel/runtime/helpers/interopRequireDefault')(require('./174')).default);

exports.default = module174;
