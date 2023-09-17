exports.default = function o(c) {
  var s = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
  var f = ['initialRouteName', 'screens'];
  if (!s) f.push('path', 'exact', 'stringify', 'parse');
  var u = Object.keys(c).filter(function (n) {
    return !f.includes(n);
  });
  if (u.length)
    throw new Error(
      'Found invalid properties in the configuration:\n' +
        t(u) +
        "\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n" +
        t(f) +
        '\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.'
    );
  if (c.screens)
    Object.entries(c.screens).forEach(function (t) {
      var c = module25.default(t, 2),
        s = c[1];
      if ('string' != typeof s) o(s, false);
    });
};

var module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  t = function (n) {
    return n
      .map(function (n) {
        return '- ' + n;
      })
      .join('\n');
  };
