var module20 = require('@babel/runtime/helpers/interopRequireDefault')(require('./20')),
  n = {},
  o = {};

exports.customBubblingEventTypes = n;
exports.customDirectEventTypes = o;
var s = new Map(),
  u = new Map();

function l(t) {
  var s = t.bubblingEventTypes,
    u = t.directEventTypes;
  if (null != s) for (var l in s) null == n[l] && (n[l] = s[l]);
  if (null != u) for (var f in u) null == o[f] && (o[f] = u[f]);
}

exports.register = function (n, o) {
  module20.default(!s.has(n), 'Tried to register two views with the same name %s', n);
  module20.default('function' == typeof o, 'View config getter callback for component `%s` must be a function (received `%s`)', n, null === o ? 'null' : typeof o);
  s.set(n, o);
  return n;
};

exports.get = function (n) {
  var o;
  if (u.has(n)) o = u.get(n);
  else {
    var f = s.get(n);
    if ('function' != typeof f)
      module20.default(
        false,
        'View config getter callback for component `%s` must be a function (received `%s`).%s',
        n,
        null === f ? 'null' : typeof f,
        'string' == typeof n[0] && /[a-z]/.test(n[0]) ? ' Make sure to start component names with a capital letter.' : ''
      );
    l((o = f()));
    u.set(n, o);
    s.set(n, null);
  }
  module20.default(o, 'View config not found for name %s', n);
  return o;
};
