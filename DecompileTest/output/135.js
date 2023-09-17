var module136 = require('@babel/runtime/helpers/interopRequireDefault')(require('./136'));

module.exports = function (n) {
  if ('object' == typeof n && null != n) {
    var module137 = require('./137').normalizeColorObject(n);

    if (null != module137) return module137;
  }

  if ('string' == typeof n || 'number' == typeof n) return module136.default(n);
};
