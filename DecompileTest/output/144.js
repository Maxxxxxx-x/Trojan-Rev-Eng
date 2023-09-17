var module145 = require('@babel/runtime/helpers/interopRequireDefault')(require('./145')),
  e = {},
  t = new Set(),
  o = {},
  f = false;

function u() {
  if (!f) {
    o = module145.default.getConstants();
    f = true;
  }

  return o;
}

function c(o) {
  if (undefined === e[o] && globals.nativeCallSyncHook && module145.default.getConstantsForViewManager)
    try {
      e[o] = module145.default.getConstantsForViewManager(o);
    } catch (n) {
      console.error("NativeUIManager.getConstantsForViewManager('" + o + "') threw an exception.", n);
      e[o] = null;
    }
  var f = e[o];
  if (f) return f;
  if (!globals.nativeCallSyncHook) return f;

  if (module145.default.lazilyLoadView && !t.has(o)) {
    var c = module145.default.lazilyLoadView(o);
    t.add(o);

    if (null != c && null != c.viewConfig) {
      u()[o] = c.viewConfig;
      s(o);
    }
  }

  return e[o];
}

var l = Object.assign({}, module145.default, {
  createView: function (t, o, f, u) {
    if (undefined === e[o]) c(o);
    module145.default.createView(t, o, f, u);
  },
  getConstants: function () {
    return u();
  },
  getViewManagerConfig: function (n) {
    return c(n);
  },
  hasViewManagerConfig: function (n) {
    return null != c(n);
  },
});

function s(n) {
  var t = u()[n];
  e[n] = t;

  if (t.Manager) {
    require('./40')(t, 'Constants', {
      get: function () {
        var module24 = require('./24')[t.Manager],
          e = {};

        if (module24)
          Object.keys(module24).forEach(function (t) {
            var o = module24[t];
            if ('function' != typeof o) e[t] = o;
          });
        return e;
      },
    });

    require('./40')(t, 'Commands', {
      get: function () {
        var module24 = require('./24')[t.Manager],
          e = {},
          o = 0;

        if (module24)
          Object.keys(module24).forEach(function (t) {
            if ('function' == typeof module24[t]) e[t] = o++;
          });
        return e;
      },
    });
  }
}

module145.default.getViewManagerConfig = l.getViewManagerConfig;
Object.keys(u()).forEach(function (n) {
  s(n);
});
if (!globals.nativeCallSyncHook)
  Object.keys(u()).forEach(function (t) {
    if (!require('./146').includes(t)) {
      if (!e[t]) e[t] = u()[t];

      require('./40')(module145.default, t, {
        get: function () {
          console.warn(
            "Accessing view manager configs directly off UIManager via UIManager['" + t + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + t + "') instead."
          );
          return l.getViewManagerConfig(t);
        },
      });
    }
  });
module.exports = l;
