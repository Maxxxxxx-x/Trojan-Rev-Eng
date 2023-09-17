module.exports = function (t, n, c) {
  var module642 = this || require('./642');

  require('./633').forEach(c, function (c) {
    t = c.call(module642, t, n);
  });

  return t;
};
