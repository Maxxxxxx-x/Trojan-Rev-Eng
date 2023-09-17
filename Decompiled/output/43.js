var module42 = require('@babel/runtime/helpers/interopRequireDefault')(require('./42'));

module.exports = function (c, s) {
  if ('focus' === s && module42.default) module42.default.setAccessibilityFocus(c);
};
