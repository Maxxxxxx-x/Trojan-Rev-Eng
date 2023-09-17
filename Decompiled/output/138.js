exports.ConditionallyIgnoredEventHandlers = function (t) {
  if ('ios' === module21.default.OS && true !== globals.RN$ViewConfigEventValidAttributesDisabled) return t;
  return;
};

exports.DynamicallyInjectedByGestureHandler = function (n) {
  t.add(n);
  return n;
};

exports.isIgnored = function (n) {
  if ('object' == typeof n && null != n) return t.has(n);
  return false;
};

var module21 = require('@babel/runtime/helpers/interopRequireDefault')(require('./21')),
  t = new WeakSet();
