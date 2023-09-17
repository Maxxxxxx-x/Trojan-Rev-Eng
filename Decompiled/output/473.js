exports.default = function (l) {
  var n,
    u,
    t,
    o = l;

  for (; null != (null == (s = o) ? undefined : s.routes[null != (v = o.index) ? v : 0].state); ) {
    var s, v, f;
    o = o.routes[null != (f = o.index) ? f : 0].state;
  }

  return null == (n = o) ? undefined : n.routes[null != (u = null == (t = o) ? undefined : t.index) ? u : 0];
};
