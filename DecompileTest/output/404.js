exports.default = function (u, l) {
  var o = module385.default.add(
    module125.default.createElement(module405.default, {
      actions:
        u.length > 0
          ? u
          : [
              {
                text: '\u786e\u5b9a',
              },
            ],
      onAnimationEnd: function (t) {
        if (!t) module385.default.remove(o);
      },
      onBackHandler: l,
    })
  );
  return o;
};

var module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385')),
  module405 = require('@babel/runtime/helpers/interopRequireDefault')(require('./405'));
