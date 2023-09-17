module.exports = function (t, o) {
  if (t) {
    if ('string' == typeof t) return require('./29')(t, o);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === n && t.constructor) n = t.constructor.name;
    return 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? require('./29')(t, o) : undefined;
  }
};

module.exports.__esModule = true;
module.exports.default = module.exports;
