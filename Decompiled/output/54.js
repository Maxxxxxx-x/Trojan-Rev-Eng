module.exports = function (t) {
  return -1 !== Function.toString.call(t).indexOf('[native code]');
};

module.exports.__esModule = true;
module.exports.default = module.exports;
