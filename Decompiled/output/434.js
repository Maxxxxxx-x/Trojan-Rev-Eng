exports.useAsyncStorage = function (n) {
  return {
    getItem: function (...args) {
      return module435.default.getItem.apply(module435.default, [n].concat(args));
    },
    setItem: function (...args) {
      return module435.default.setItem.apply(module435.default, [n].concat(args));
    },
    mergeItem: function (...args) {
      return module435.default.mergeItem.apply(module435.default, [n].concat(args));
    },
    removeItem: function (...args) {
      return module435.default.removeItem.apply(module435.default, [n].concat(args));
    },
  };
};

var module435 = require('@babel/runtime/helpers/interopRequireDefault')(require('./435'));
