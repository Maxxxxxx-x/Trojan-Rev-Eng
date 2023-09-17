var t,
  u,
  module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module433 = require('@babel/runtime/helpers/interopRequireDefault')(require('./433'));

function f() {
  return (f = module271.default(function* (t) {
    var u = yield module433.default.getItem(t);
    return JSON.parse(u);
  })).apply(this, arguments);
}

function o() {
  return (o = module271.default(function* () {
    var u = yield module433.default.getItem('Auth');
    t = u;
    return t;
  })).apply(this, arguments);
}

function c() {
  return (c = module271.default(function* () {
    var t = yield module433.default.getItem('HttpUrl');
    u = t;
    return u;
  })).apply(this, arguments);
}

var p = {
  set: function (t, u) {
    return module433.default.setItem(t, JSON.stringify(u));
  },
  get: function (t) {
    return f.apply(this, arguments);
  },
  remove: function (t) {
    return module433.default.removeItem(t);
  },
  setAuth: function (u) {
    t = u;
    return module433.default.setItem('Auth', u);
  },
  removeAuth: function () {
    t = null;
    return module433.default.removeItem('Auth');
  },
  loadAuth: function () {
    return o.apply(this, arguments);
  },
  getAuth: function () {
    return t;
  },
  setUrl: function (t) {
    u = t;
    return module433.default.setItem('HttpUrl', t);
  },
  removeUrl: function () {
    u = null;
    return module433.default.removeItem('HttpUrl');
  },
  loadUrl: function () {
    return c.apply(this, arguments);
  },
  getUrl: function () {
    return u;
  },
};
exports.default = p;
