exports.__esModule = true;

exports.default = function (o) {
  if ('undefined' != typeof console && 'function' == typeof console.error) console.error(o);

  try {
    throw new Error(o);
  } catch (o) {}
};
