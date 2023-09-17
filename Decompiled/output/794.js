function n() {
  for (var n = {}, module792 = Object.keys(require('./792')), u = module792.length, c = 0; c < u; c++)
    n[module792[c]] = {
      distance: -1,
      parent: null,
    };

  return n;
}

function t(t) {
  var u = n(),
    c = [t];

  for (u[t].distance = 0; c.length; )
    for (var o = c.pop(), module792 = Object.keys(require('./792')[o]), f = module792.length, p = 0; p < f; p++) {
      var s = module792[p],
        l = u[s];

      if (-1 === l.distance) {
        l.distance = u[o].distance + 1;
        l.parent = o;
        c.unshift(s);
      }
    }

  return u;
}

function u(n, t) {
  return function (u) {
    return t(n(u));
  };
}

function c(n, t) {
  for (var c = [t[n].parent, n], module792 = require('./792')[t[n].parent][n], i = t[n].parent; t[i].parent; ) {
    c.unshift(t[i].parent);
    module792 = u(require('./792')[t[i].parent][i], module792);
    i = t[i].parent;
  }

  module792.conversion = c;
  return module792;
}

module.exports = function (n) {
  for (var u = t(n), o = {}, i = Object.keys(u), f = i.length, p = 0; p < f; p++) {
    var s = i[p];
    if (null !== u[s].parent) o[s] = c(s, u);
  }

  return o;
};
