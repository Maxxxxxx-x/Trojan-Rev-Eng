exports.default = function (o, u, c) {
  var f = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 'default',
    s = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : '',
    v = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : ['', ''],
    h = arguments.length > 6 ? arguments[6] : undefined;
  if (!c) return void console.error('Must specify callbackOrActions');
  var p = module385.default.add(
    module125.default.createElement(module402.default, {
      title: o,
      message: u,
      actions: c,
      type: f,
      defaultValue: s,
      onAnimationEnd: function (t) {
        if (!t) module385.default.remove(p);
      },
      placeholders: v,
      onBackHandler: h,
    })
  );
  return p;
};

var module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385')),
  module402 = require('@babel/runtime/helpers/interopRequireDefault')(require('./402'));
