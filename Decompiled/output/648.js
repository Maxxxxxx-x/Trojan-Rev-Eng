var t = [
  'age',
  'authorization',
  'content-length',
  'content-type',
  'etag',
  'expires',
  'from',
  'host',
  'if-modified-since',
  'if-unmodified-since',
  'last-modified',
  'location',
  'max-forwards',
  'proxy-authorization',
  'referer',
  'retry-after',
  'user-agent',
];

module.exports = function (i) {
  var o,
    n,
    f,
    s = {};

  if (i) {
    require('./633').forEach(i.split('\n'), function (i) {
      if (((f = i.indexOf(':')), (o = require('./633').trim(i.substr(0, f)).toLowerCase()), (n = require('./633').trim(i.substr(f + 1))), o)) {
        if (s[o] && t.indexOf(o) >= 0) return;
        s[o] = 'set-cookie' === o ? (s[o] ? s[o] : []).concat([n]) : s[o] ? s[o] + ', ' + n : n;
      }
    });

    return s;
  } else return s;
};
