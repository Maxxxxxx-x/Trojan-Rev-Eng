var t = {
  width: undefined,
  height: undefined,
};

module.exports = function (h, n) {
  var o = h || t,
    u = n || t;
  return o !== u && (o.width !== u.width || o.height !== u.height);
};
