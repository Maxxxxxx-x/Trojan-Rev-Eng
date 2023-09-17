module.exports = function (t, o) {
  if ('function' != typeof o && null !== o) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(t, 'prototype', {
    writable: false,
  });
  if (o) require('./14')(t, o);
};

module.exports.__esModule = true;
module.exports.default = module.exports;
