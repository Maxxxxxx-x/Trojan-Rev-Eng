exports.__esModule = true;
exports.defaultMergeProps = t;
exports.wrapMergePropsFunc = u;

exports.mergePropsFactory = function (n) {
  return n
    ? 'function' == typeof n
      ? u(n)
      : require('./584').createInvalidArgFactory(n, 'mergeProps')
    : function () {
        return t;
      };
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178'));

require('@babel/runtime/helpers/interopRequireDefault')(require('./582'));

function t(t, u, o) {
  return module178.default({}, o, t, u);
}

function u(n) {
  return function (t, u) {
    u.displayName;
    var o,
      c = u.areMergedPropsEqual,
      f = false;
    return function (t, u, s) {
      var p = n(t, u, s);
      if (f) {
        if (!c(p, o)) o = p;
      } else {
        f = true;
        o = p;
      }
      return o;
    };
  };
}
