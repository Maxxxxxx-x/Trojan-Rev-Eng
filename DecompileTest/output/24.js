function n(n, t) {
  if (!n) return null;

  var module25 = require('./25')(n, 5),
    f = module25[0],
    s = module25[1],
    c = module25[2],
    v = module25[3],
    h = module25[4];

  if ((require('./20')(!f.startsWith('RCT') && !f.startsWith('RK'), "Module name prefixes should've been stripped by the native side but wasn't for " + f), !s && !c))
    return {
      name: f,
    };
  var y = {};
  if (c)
    c.forEach(function (n, l) {
      var f = (v && u(v, l)) || false,
        s = (h && u(h, l)) || false;

      require('./20')(!f || !s, 'Cannot have a method that is both async and a sync hook');

      var c = f ? 'promise' : s ? 'sync' : 'async';
      y[n] = o(t, l, c);
    });
  Object.assign(y, s);
  if (null == y.getConstants)
    y.getConstants = function () {
      return s || Object.freeze({});
    };
  else
    console.warn(
      "Unable to define method 'getConstants()' on NativeModule '" + f + "'. NativeModule '" + f + "' already has a constant or method called 'getConstants'. Please remove it."
    );
  return {
    name: f,
    module: y,
  };
}

function t(t, o) {
  require('./20')(globals.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");

  var u = n(globals.nativeRequireModuleConfig(t), o);
  return u && u.module;
}

function o(n, t, o) {
  var u = null;
  (u =
    'promise' === o
      ? function (...args) {
          var s = new Error();
          return new Promise(function (o, f) {
            require('./31').enqueueNativeCall(
              n,
              t,
              args,
              function (n) {
                return o(n);
              },
              function (n) {
                return f(l(n, s));
              }
            );
          });
        }
      : function (...args) {
          var s = args.length > 0 ? args[args.length - 1] : null,
            c = args.length > 1 ? args[args.length - 2] : null,
            v = 'function' == typeof s,
            h = 'function' == typeof c;
          if (h) require('./20')(v, 'Cannot have a non-function arg after a function arg.');
          var y = v ? s : null,
            C = h ? c : null,
            b = v + h,
            M = args.slice(0, args.length - b);
          if ('sync' === o) return require('./31').callNativeSyncHook(n, t, M, C, y);

          require('./31').enqueueNativeCall(n, t, M, C, y);
        }).type = o;
  return u;
}

function u(n, t) {
  return -1 !== n.indexOf(t);
}

function l(n, t) {
  return Object.assign(t, n || {});
}

globals.__fbGenNativeModule = n;
var f = {};
if (globals.nativeModuleProxy) f = globals.nativeModuleProxy;
else if (!globals.nativeExtensions) {
  var s = globals.__fbBatchedBridgeConfig;

  require('./20')(s, '__fbBatchedBridgeConfig is not set, cannot invoke native modules');

  var module40 = require('./40');

  (s.remoteModuleConfig || []).forEach(function (o, u) {
    var l = n(o, u);
    if (l)
      l.module
        ? (f[l.name] = l.module)
        : module40(f, l.name, {
            get: function () {
              return t(l.name, u);
            },
          });
  });
}
module.exports = f;
