var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module385 = require('@babel/runtime/helpers/interopRequireDefault')(require('./385')),
  module623 = require('@babel/runtime/helpers/interopRequireDefault')(require('./623')),
  f = {
    duration: 3,
    onClose: function () {},
    mask: true,
    stackable: true,
  },
  l = module178.default({}, f),
  c = {};

function s(n) {
  module385.default.remove(n);
  delete c[n];
}

function v() {
  Object.keys(c).forEach(function (n) {
    return module385.default.remove(Number.parseInt(n, 10));
  });
}

function k(f, k) {
  var C = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : l.duration,
    p = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : l.onClose,
    y = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : l.mask,
    b = module178.default(module178.default({}, l), {
      content: f,
      type: k,
      duration: C,
      onClose: p,
      mask: y,
    });
  if ('string' != typeof f) b = module178.default(module178.default({}, b), f);
  if (!b.stackable) v();
  var h = module385.default.add(
    module125.default.createElement(module623.default, {
      content: b.content,
      duration: b.duration,
      onClose: b.onClose,
      type: b.type,
      mask: b.mask,
      onAnimationEnd: function () {
        s(h);
      },
    })
  );
  c[h] = 1;
  return h;
}

var C = {
  SHORT: 3,
  LONG: 8,
  defaultConfig: f,
  getConfig: function () {
    return module178.default({}, l);
  },
  config: function (t) {
    l = module178.default(module178.default({}, l), t);
  },
  show: function (n, t, o) {
    return k(n, 'info', t, function () {}, o);
  },
  info: function (n, t, o, u) {
    return k(n, 'info', t, o, u);
  },
  success: function (n, t, o, u) {
    return k(n, 'success', t, o, u);
  },
  fail: function (n, t, o, u) {
    return k(n, 'fail', t, o, u);
  },
  offline: function (n, t, o, u) {
    return k(n, 'offline', t, o, u);
  },
  loading: function (n, t, o, u) {
    return k(n, 'loading', t, o, u);
  },
  remove: s,
  removeAll: v,
};
exports.default = C;
