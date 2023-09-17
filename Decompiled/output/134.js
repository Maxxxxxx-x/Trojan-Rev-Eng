module.exports = function (n) {
  if (undefined === n || null === n) return n;

  var module135 = require('./135')(n);

  if (null !== module135 && undefined !== module135) {
    if ('object' == typeof module135) {
      var module137 = require('./137').processColorObject(module135);

      if (null != module137) return module137;
    }

    return 'number' != typeof module135 ? null : (module135 = ((module135 << 24) | (module135 >>> 8)) >>> 0);
  }
};
