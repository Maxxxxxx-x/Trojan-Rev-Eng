var n,
  t,
  module807 = require('@babel/runtime/helpers/interopRequireDefault')(require('./807')),
  o =
    null !=
    (n =
      null == module807.default
        ? undefined
        : null == module807.default.getConstants
        ? undefined
        : null == (t = module807.default.getConstants())
        ? undefined
        : t.initialWindowMetrics)
      ? n
      : null;

exports.initialWindowMetrics = o;
var s = null == o ? undefined : o.insets;
exports.initialWindowSafeAreaInsets = s;
