module.exports = function (t) {
  var module10 = require('./10')(t, 'string');

  return 'symbol' === require('./11').default(module10) ? module10 : String(module10);
};

module.exports.__esModule = true;
module.exports.default = module.exports;
