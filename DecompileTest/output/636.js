var n = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (o, t) {
  n[o] = function (n) {
    return typeof n === o || 'a' + (t < 1 ? 'n ' : ' ') + o;
  };
});
var o = {};

n.transitional = function (n, t, i) {
  function s(n, o) {
    return '[Axios v' + require('./637').version + "] Transitional option '" + n + "'" + o + (i ? '. ' + i : '');
  }

  return function (i, f, u) {
    if (false === n) throw new (require('./638'))(s(f, ' has been removed' + (t ? ' in ' + t : '')), require('./638').ERR_DEPRECATED);

    if (t && !o[f]) {
      o[f] = true;
      console.warn(s(f, ' has been deprecated since v' + t + ' and will be removed in the near future'));
    }

    return !n || n(i, f, u);
  };
};

module.exports = {
  assertOptions: function (n, o, t) {
    if ('object' != typeof n) throw new (require('./638'))('options must be an object', require('./638').ERR_BAD_OPTION_VALUE);

    for (var i = Object.keys(n), s = i.length; s-- > 0; ) {
      var f = i[s],
        u = o[f];

      if (u) {
        var c = n[f],
          b = undefined === c || u(c, f, n);
        if (true !== b) throw new (require('./638'))('option ' + f + ' must be ' + b, require('./638').ERR_BAD_OPTION_VALUE);
      } else if (true !== t) throw new (require('./638'))('Unknown option ' + f, require('./638').ERR_BAD_OPTION);
    }
  },
  validators: n,
};
