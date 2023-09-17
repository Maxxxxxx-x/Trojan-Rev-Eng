exports.default = function (o, l) {
  var u =
      arguments.length > 2 && undefined !== arguments[2]
        ? arguments[2]
        : [
            {
              text: '\u786e\u5b9a',
            },
          ],
    c = arguments.length > 3 ? arguments[3] : undefined,
    f = module385.default.add(
      module125.default.createElement(module400.default, {
        title: o,
        content: l,
        actions: u,
        onAnimationEnd: function (t) {
          if (!t) module385.default.remove(f);
        },
        onBackHandler: c,
      })
    );
  return f;
};

var module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385')),
  module400 = require('@babel/runtime/helpers/interopRequireDefault')(require('./400'));
