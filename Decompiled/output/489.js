exports.customAlphabet = function (n) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 21;
  return function () {
    for (var o = '', i = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : t; i--; ) o += n[(Math.random() * n.length) | 0];

    return o;
  };
};

exports.nanoid = function () {
  for (var n = '', t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 21; t--; )
    n += 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'[(64 * Math.random()) | 0];

  return n;
};
