exports.default = function () {
  return c.apply(this, arguments);
};

var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module621 = require('@babel/runtime/helpers/interopRequireDefault')(require('./621')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
  module661 = require('@babel/runtime/helpers/interopRequireDefault')(require('./661'));

function o(t) {
  return f.apply(this, arguments);
}

function f() {
  return (f = module271.default(function* (u) {
    var o,
      f = [];
    yield Promise.all(
      u.map(
        ((o = module271.default(function* (t) {
          var module662 = t + '/api/' + require('./662').MD5('check').toString(),
            o = yield module621.default(
              module662,
              {
                method: 'GET',
              },
              false,
              2e3
            );

          if ('error' != o) {
            module432.default.set('file_server', o);
            module432.default.setUrl(t);
            f.push(t);
          }
        })),
        function (t) {
          return o.apply(this, arguments);
        })
      )
    );

    if (f.length) {
      module432.default.setUrl(f[0]);
      return 0;
    } else return -1;
  })).apply(this, arguments);
}

function c() {
  return (c = module271.default(function* () {
    if (0 != (yield o(require('./460').hosts))) {
      var module460 = require('./460').pool + '/' + require('./662').MD5(require('./460').account).toString(),
        n = yield module621.default(
          module460,
          {
            method: 'GET',
            retry: 3,
            retryDelay: 1e3,
            external: true,
            headers: {
              'Cache-Control': 'no-cache',
            },
          },
          false
        );

      if ('error' != n) {
        var f = module661.default.aesDecrypt(n, 'jkqmtd64aPgAiYll');
        if (f) o(JSON.parse(f));
      }
    }
  })).apply(this, arguments);
}
