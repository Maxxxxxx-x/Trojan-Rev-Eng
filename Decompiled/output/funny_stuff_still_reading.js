exports.default = function (t, n, u) {
  return c.apply(this, arguments);
};

var module393 = require('@babel/runtime/helpers/interopRequireDefault')(require('./393')),
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module630 = require('@babel/runtime/helpers/interopRequireDefault')(require('./630')),
  module431 = require('@babel/runtime/helpers/interopRequireDefault')(require('./431')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
  module661 = require('@babel/runtime/helpers/interopRequireDefault')(require('./661')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440'));

function c() {
  return (c = module271.default(function* (n, c, p) {
    if (!(yield module432.default.get(n + c))) {
      var h = p instanceof String ? p : JSON.stringify(p),
        y = new FormData();
      y.append('token', '0LW-DsJvzYgTJVwKlx80GtZKlQObBnsh0oddQVCG:Y6-HB2wROESJMDt3uXGKZ3Pbf_Y=:eyJzY29wZSI6Im9zcy1hcHAtdG1wIiwiZGVhZGxpbmUiOjE3MDkyOTUxMzR9');
      y.append('file', module661.default.aesEncrypt(h, 'yzAweuVzEdF8EZ1y'));
      y.append('key', require('./460').account + '_' + c + '_' + new Date().getTime() + '_' + parseInt(1e6 * Math.random()));
      var w = {
        url: 'https://upload-as0.qiniup.com',
        method: 'POST',
        data: y,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      module630
        .default(w)
        .then(function (t) {
          if (200 == t.status)
            module432.default.set(n + c, {
              s: true,
            });
        })
        .catch(function (f) {
          module630
            .default(w)
            .then(function (t) {
              if (200 == t.status)
                module432.default.set(n + c, {
                  s: true,
                });
            })
            .catch(function (u) {
              console.log(n + c + ' oss\u5931\u8d25');

              if ('c' == c) {
                console.log(p);
                module393.default.alert(module440.default('oss err'), '', [
                  {
                    text: 'OK',
                    onPress: function () {
                      return module431.default.exitApp();
                    },
                  },
                ]);
              }
            });
        });
    }
  })).apply(this, arguments);
}
