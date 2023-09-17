var t = Array.prototype.concat,
  n = Array.prototype.slice,
  o = (module.exports = function (module797) {
    for (var c = [], u = 0, p = module797.length; u < p; u++) {
      var i = module797[u];
      if (require('./797')(i)) c = t.call(c, n.call(i));
      else c.push(i);
    }

    return c;
  });

o.wrap = function (t) {
  return function () {
    return t(o(arguments));
  };
};
