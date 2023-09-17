exports.default = function (n) {
  var t = [];

  (function n(u, o) {
    o.routes.forEach(function (o) {
      var f,
        c,
        l = u ? u + ' > ' + o.name : o.name;
      if (!(null == (f = o.state) || null == (c = f.routeNames)))
        c.forEach(function (n) {
          if (n === o.name) t.push([l, l + ' > ' + o.name]);
        });
      if (o.state) n(l, o.state);
    });
  })('', n);

  return t;
};
