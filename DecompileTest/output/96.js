module.exports = function (t, o) {
  if (null == t) return {};

  var n,
    l,
    module97 = require('./97')(t, o);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);

    for (l = 0; l < s.length; l++) {
      n = s[l];
      if (!(o.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(t, n) && (module97[n] = t[n]);
    }
  }

  return module97;
};

module.exports.__esModule = true;
module.exports.default = module.exports;
