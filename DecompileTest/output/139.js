exports.get = p;

exports.getWithFallback_DEPRECATED = function (n, u) {
  if (null == t) {
    if (y(n)) return p(n, u);
  } else if (null != t(n)) return p(n, u);

  var l = function (t) {
    return null;
  };

  l.displayName = 'Fallback(' + n + ')';
  return l;
};

exports.setRuntimeConfigProvider = function (n) {
  module20.default(null == t, 'NativeComponentRegistry.setRuntimeConfigProvider() called more than once.');
  t = n;
};

exports.unstable_hasStaticViewConfig = function (n) {
  var u;
  return !(null != (u = null == t ? undefined : t(n))
    ? u
    : {
        native: true,
      }
  ).native;
};

var t,
  module140 = s(require('./140')),
  module141 = require('@babel/runtime/helpers/interopRequireDefault')(require('./141')),
  module128 = require('@babel/runtime/helpers/interopRequireDefault')(require('./128')),
  module147 = require('@babel/runtime/helpers/interopRequireDefault')(require('./147')),
  module164 = require('@babel/runtime/helpers/interopRequireDefault')(require('./164')),
  module20 = require('@babel/runtime/helpers/interopRequireDefault')(require('./20'));

s(require('./125'));

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

function s(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = v(n);
  if (u && u.has(t)) return u.get(t);
  var l = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
      else l[f] = t[f];
    }

  l.default = t;
  if (u) u.set(t, l);
  return l;
}

function p(u, c) {
  module128.default.register(u, function () {
    var l,
      v =
        null != (l = null == t ? undefined : t(u))
          ? l
          : {
              native: true,
              strict: false,
              verify: false,
            },
      s = v.native,
      p = v.strict,
      y = v.verify,
      module167 = s ? module147.default(u) : require('./167').createViewConfig(c());

    if (y) {
      var w = s ? module167 : module147.default(u),
        module167 = s ? require('./167').createViewConfig(c()) : module167;

      if (p) {
        var P = module140.validate(u, w, module167);
        if ('invalid' === P.type) console.error(module140.stringifyValidationResult(u, P));
      } else module164.default(w, module167);
    }

    return module167;
  });
  return u;
}

function y(n) {
  module20.default(null == t, 'Unexpected invocation!');
  return null != module141.default.getViewManagerConfig(n);
}
