module.exports = function (n, t) {
  t = t || new FormData();
  var f = [];

  function o(n) {
    return null === n
      ? ''
      : require('./633').isDate(n)
      ? n.toISOString()
      : require('./633').isArrayBuffer(n) || require('./633').isTypedArray(n)
      ? 'function' == typeof Blob
        ? new Blob([n])
        : Buffer.from(n)
      : n;
  }

  (function n(s, u) {
    if (require('./633').isPlainObject(s) || require('./633').isArray(s)) {
      if (-1 !== f.indexOf(s)) throw Error('Circular reference detected in ' + u);
      f.push(s);

      require('./633').forEach(s, function (f, s) {
        if (!require('./633').isUndefined(f)) {
          var c,
            p = u ? u + '.' + s : s;
          if (f && !u && 'object' == typeof f)
            if (require('./633').endsWith(s, '{}')) f = JSON.stringify(f);
            else if (require('./633').endsWith(s, '[]') && (c = require('./633').toArray(f)))
              return void c.forEach(function (n) {
                if (!require('./633').isUndefined(n)) t.append(p, o(n));
              });
          n(f, p);
        }
      });

      f.pop();
    } else t.append(u, o(s));
  })(n);

  return t;
};
