exports.unstable_hasComponent = function (t) {
  var o = n.get(t);

  if (null == o) {
    if (!globals.__nativeComponentRegistry__hasComponent) throw "unstable_hasComponent('" + t + "'): Global function is not registered";
    o = globals.__nativeComponentRegistry__hasComponent(t);
    n.set(t, o);
  }

  return o;
};

var n = new Map();
