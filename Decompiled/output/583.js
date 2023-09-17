exports.__esModule = true;

exports.default = function (t) {
  if ('object' != typeof t || null === t) return false;
  var o = Object.getPrototypeOf(t);
  if (null === o) return true;
  var u = o;

  for (; null !== Object.getPrototypeOf(u); ) u = Object.getPrototypeOf(u);

  return o === u;
};
