exports.default = function (o) {
  module393.default.alert(module440.default('authorization1') + o + module440.default('authorization2'), '', [
    {
      text: 'OK',
      onPress: function () {
        return module431.default.exitApp();
      },
    },
  ]);
};

var module393 = require('@babel/runtime/helpers/interopRequireDefault')(require('./393')),
  module431 = require('@babel/runtime/helpers/interopRequireDefault')(require('./431')),
  module440 = require('@babel/runtime/helpers/interopRequireDefault')(require('./440'));
