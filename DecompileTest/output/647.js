function n(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

module.exports = function (t, c, o) {
  if (!c) return t;
  var f;
  if (o) f = o(c);
  else if (require('./633').isURLSearchParams(c)) f = c.toString();
  else {
    var s = [];

    require('./633').forEach(c, function (t, c) {
      if (null !== t && undefined !== t) {
        if (require('./633').isArray(t)) c += '[]';
        else t = [t];

        require('./633').forEach(t, function (t) {
          if (require('./633').isDate(t)) t = t.toISOString();
          else if (require('./633').isObject(t)) t = JSON.stringify(t);
          s.push(n(c) + '=' + n(t));
        });
      }
    });

    f = s.join('&');
  }

  if (f) {
    var l = t.indexOf('#');
    if (-1 !== l) t = t.slice(0, l);
    t += (-1 === t.indexOf('?') ? '?' : '&') + f;
  }

  return t;
};
