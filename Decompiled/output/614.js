module.exports = function (n, t) {
  return (t = 'number' == typeof t ? t : 1 / 0)
    ? (function n(u, c) {
        return u.reduce(function (u, o) {
          return Array.isArray(o) && c < t ? u.concat(n(o, c + 1)) : u.concat(o);
        }, []);
      })(n, 1)
    : Array.isArray(n)
    ? n.map(function (n) {
        return n;
      })
    : n;
};
