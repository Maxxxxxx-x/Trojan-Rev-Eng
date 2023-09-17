var n = {};

function o(n) {
  var o = function (...args) {
    var i = args[0];
    if (undefined === i || null === i) return i;
    else {
      if (i.length > 1) args = i;
      return n(args);
    }
  };

  if ('conversion' in n) o.conversion = n.conversion;
  return o;
}

function t(n) {
  var o = function (...args) {
    var i = args[0];
    if (undefined === i || null === i) return i;
    if (i.length > 1) args = i;
    var v = n(args);
    if ('object' == typeof v) for (var f = v.length, l = 0; l < f; l++) v[l] = Math.round(v[l]);
    return v;
  };

  if ('conversion' in n) o.conversion = n.conversion;
  return o;
}

Object.keys(require('./792')).forEach(function (c) {
  n[c] = {};
  Object.defineProperty(n[c], 'channels', {
    value: require('./792')[c].channels,
  });
  Object.defineProperty(n[c], 'labels', {
    value: require('./792')[c].labels,
  });

  var module794 = require('./794')(c);

  Object.keys(module794).forEach(function (v) {
    var f = module794[v];
    n[c][v] = t(f);
    n[c][v].raw = o(f);
  });
});
module.exports = n;
