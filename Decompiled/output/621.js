exports.default = function (v, h) {
  var _ = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
    y = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0;

  h.url = v;
  h.headers = Object.assign(
    {
      lang: require('./460').lang,
    },
    h.headers
  );
  var p = module432.default.getAuth();
  if (p)
    h.headers = Object.assign(
      {
        Authorization: 'Bearer ' + p,
      },
      h.headers
    );
  if (h.data instanceof FormData)
    h.headers = Object.assign(
      {
        'Content-Type': 'multipart/form-data',
      },
      h.headers
    );
  if (_) var C = module622.default.loading('', 0);
  var j = module630.default.create();
  if (y)
    if ('android' === ReactNative.Platform.OS) {
      j.interceptors.request.use(function (t) {
        t.cancelToken = new module630.default.CancelToken(function (t) {
          setTimeout(function () {
            return t('Time out');
          }, y);
        });
        return t;
      });
    } else h.timeout = y;
  j.interceptors.response.use(undefined, function (t) {
    var n = t.config;

    if (n && n.retry) {
      n.__retryCount = n.__retryCount || 0;
      if (n.__retryCount >= n.retry) return Promise.reject(t);
      else {
        n.__retryCount += 1;
        console.log(n.url + ' \u81ea\u52a8\u91cd\u8bd5\u7b2c' + n.__retryCount + '\u6b21');
        return new Promise(function (t) {
          setTimeout(function () {
            t();
          }, n.retryDelay || 1);
        }).then(function () {
          return j(n);
        });
      }
    } else return Promise.reject(t);
  });
  return j(h)
    .then(function (o) {
      if (_) module385.default.remove(C);
      var u = o.data;
      if (h.external) return u;

      if (200 != u.code) {
        if ((_ && module622.default.info(u.msg), 403 === u.code)) {
          module432.default.removeAuth();
          module432.default.remove('Login');

          var module463 = require('./463').StackActions.replace('Login');

          module462.default.dispatch(module463);
        }

        console.log('server_err', v, u.msg);
        return String('error');
      }

      if ('' != u.data) {
        var y = module661.default.aesDecrypt(u.data, 'UwzP3dplBhozKVsS');
        return JSON.parse(y);
      }

      return u.data;
    })
    .catch(function (o) {
      console.log('net_err', v, o);
      if (_) module385.default.remove(C);
      if (_) module622.default.info(module440.default('net err'));
      return String('error');
    });
};

var module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385')),
  module622 = require('@babel/runtime/helpers/interopRequireDefault')(require('./622')),
  ReactNative = require('react-native'),
  module630 = require('@babel/runtime/helpers/interopRequireDefault')(require('./630')),
  module462 = require('@babel/runtime/helpers/interopRequireDefault')(require('./462')),
  module432 = require('@babel/runtime/helpers/interopRequireDefault')(require('./432')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440')),
  module661 = require('@babel/runtime/helpers/interopRequireDefault')(require('./661'));
