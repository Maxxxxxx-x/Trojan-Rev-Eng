module.exports = function (t, o) {
  if ('object' !== require('./11').default(t) || null === t) return t;
  var u = t[Symbol.toPrimitive];

  if (undefined !== u) {
    var n = u.call(t, o || 'default');
    if ('object' !== require('./11').default(n)) return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }

  return ('string' === o ? String : Number)(t);
};

module.exports.__esModule = true;
module.exports.default = module.exports;
