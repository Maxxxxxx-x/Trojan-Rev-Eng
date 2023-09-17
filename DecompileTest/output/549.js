exports.default = function (t, n) {
  for (var u of t) {
    var f,
      c,
      p = null != (f = null == (c = u.match(/^[^:]+:/)) ? undefined : c[0]) ? f : '',
      o = u
        .replace(new RegExp('^' + module511.default(p)), '')
        .replace(/\/+/g, '/')
        .replace(/^\//, ''),
      v = new RegExp(
        '^' +
          module511.default(p) +
          '(/)*' +
          o
            .split('.')
            .map(function (t) {
              return '*' === t ? '[^/]+' : module511.default(t);
            })
            .join('\\.')
      ),
      _ = n.replace(/\/+/g, '/');

    if (v.test(_)) return _.replace(v, '');
  }

  return;
};

var module511 = require('@babel/runtime/helpers/interopRequireDefault')(require('./511'));
