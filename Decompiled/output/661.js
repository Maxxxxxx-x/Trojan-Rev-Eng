var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  c = '6301386859816930',
  module662 = (function () {
    function module662() {
      module7.default(this, module662);
    }

    module8.default(module662, null, [
      {
        key: 'md5',
        value: function (t) {
          return require('./662').MD5(t).toString();
        },
      },
      {
        key: 'aesEncrypt',
        value: function (t, n) {
          var module662 = n,
            module662 = require('./662').enc.Utf8.parse(t),
            module662 = require('./662').enc.Utf8.parse(module662),
            module662 = require('./662').enc.Utf8.parse(c),
            module662 = require('./662')
              .AES.encrypt(module662, module662, {
                iv: module662,
                mode: require('./662').mode.CBC,
                padding: require('./662').pad.Pkcs7,
              })
              .ciphertext.toString(),
            module662 = require('./662').enc.Hex.parse(module662);

          return require('./662').enc.Base64.stringify(module662);
        },
      },
      {
        key: 'aesDecrypt',
        value: function (t, n) {
          var module662 = n,
            module662 = require('./662').enc.Utf8.parse(module662),
            module662 = require('./662').enc.Utf8.parse(c);

          return require('./662')
            .AES.decrypt(t, module662, {
              iv: module662,
              mode: require('./662').mode.CBC,
              padding: require('./662').pad.Pkcs7,
            })
            .toString(require('./662').enc.Latin1);
        },
      },
    ]);
    return module662;
  })();

exports.default = module662;
