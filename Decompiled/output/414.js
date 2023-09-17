var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  ReactNative = require('react-native'),
  o = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo),
  u = false,
  c = -1,
  s = {},
  f = function (t) {
    var n = t.level,
      o = t.charging,
      u = t.chargingtime,
      c = t.dischargingtime;
    return {
      batteryLevel: n,
      lowPowerMode: false,
      batteryState: 1 === n ? 'full' : o ? 'charging' : 'unplugged',
      chargingtime: u,
      dischargingtime: c,
    };
  },
  y = function () {
    return window.performance && window.performance.memory ? window.performance.memory.jsHeapSizeLimit : -1;
  };

exports.getMaxMemorySync = y;

var l = function () {
  return document.referrer;
};

exports.getInstallReferrerSync = l;

var v = function () {
  return !!navigator.onLine;
};

exports.isAirplaneModeSync = v;

var d = function () {
  return window.navigator.userAgent;
};

exports.getUserAgentSync = d;

var p = function () {
  return !!navigator.geolocation;
};

exports.isLocationEnabledSync = p;

var S = function () {
  return navigator.deviceMemory ? 1e9 * navigator.deviceMemory : -1;
};

exports.getTotalMemorySync = S;

var h = function () {
  return window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize : -1;
};

exports.getUsedMemorySync = h;
if ('undefined' != typeof navigator && navigator.getBattery)
  navigator.getBattery().then(function (t) {
    u = t.charging;
    t.addEventListener('chargingchange', function () {
      var n = t.charging;
      u = n;
      s = f(t);
      o.emit('RNDeviceInfo_powerStateDidChange', s);
    });
    t.addEventListener('levelchange', function () {
      var n = t.level;
      c = n;
      s = f(t);
      o.emit('RNDeviceInfo_batteryLevelDidChange', n);
      if (n < 0.2) o.emit('RNDeviceInfo_batteryLevelIsLow', n);
    });
  });

var M = module271.default(function* () {
    return l();
  }),
  w = function () {
    return M.apply(this, arguments);
  };

exports.getInstallReferrer = w;

var D = module271.default(function* () {
    return d();
  }),
  C = function () {
    return D.apply(this, arguments);
  };

exports.getUserAgent = C;

var B = module271.default(function* () {
    return (
      !!navigator.getBattery &&
      navigator.getBattery().then(function (t) {
        return t.charging;
      })
    );
  }),
  L = function () {
    return B.apply(this, arguments);
  };

exports.isBatteryCharging = L;

exports.isBatteryChargingSync = function () {
  return u;
};

var P = module271.default(function* () {
    return (
      !(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) &&
      navigator.mediaDevices.enumerateDevices().then(function (t) {
        return !!t.find(function (t) {
          return 'videoinput' === t.kind;
        });
      })
    );
  }),
  k = function () {
    return P.apply(this, arguments);
  };

exports.isCameraPresent = k;

exports.isCameraPresentSync = function () {
  console.log('[react-native-device-info] isCameraPresentSync not supported - please use isCameraPresent');
  return false;
};

var A = module271.default(function* () {
    return navigator.getBattery
      ? navigator.getBattery().then(function (t) {
          return t.level;
        })
      : -1;
  }),
  I = function () {
    return A.apply(this, arguments);
  };

exports.getBatteryLevel = I;

exports.getBatteryLevelSync = function () {
  return c;
};

var T = module271.default(function* () {
    return p();
  }),
  b = function () {
    return T.apply(this, arguments);
  };

exports.isLocationEnabled = b;

var x = module271.default(function* () {
    return v();
  }),
  E = function () {
    return x.apply(this, arguments);
  };

exports.isAirplaneMode = E;

var O = module271.default(function* () {
    module271 = window.navigator.userAgent;
    ReactNative = window.navigator.platform;
    o = ReactNative;
    if (-1 !== ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(ReactNative)) o = 'Mac OS';
    else if (-1 !== ['iPhone', 'iPad', 'iPod'].indexOf(ReactNative)) o = 'iOS';
    else if (-1 !== ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(ReactNative)) o = 'Windows';
    else if (/Android/.test(module271)) o = 'Android';
    else if (!o && /Linux/.test(ReactNative)) o = 'Linux';
    return o;
    var module271, ReactNative, o;
  }),
  R = function () {
    return O.apply(this, arguments);
  };

exports.getBaseOs = R;

var U = module271.default(function* () {
    return navigator.storage && navigator.storage.estimate
      ? navigator.storage.estimate().then(function (t) {
          return t.quota;
        })
      : -1;
  }),
  _ = function () {
    return U.apply(this, arguments);
  };

exports.getTotalDiskCapacity = _;

exports.getTotalDiskCapacitySync = function () {
  console.log('[react-native-device-info] getTotalDiskCapacitySync not supported - please use getTotalDiskCapacity');
  return -1;
};

var F = module271.default(function* () {
    return navigator.storage && navigator.storage.estimate
      ? navigator.storage.estimate().then(function (t) {
          return t.quota - t.usage;
        })
      : -1;
  }),
  N = function () {
    return F.apply(this, arguments);
  };

exports.getFreeDiskStorage = N;

exports.getFreeDiskStorageSync = function () {
  console.log('[react-native-device-info] getFreeDiskStorageSync not supported - please use getFreeDiskStorage');
  return -1;
};

var W = module271.default(function* () {
    return y();
  }),
  j = function () {
    return W.apply(this, arguments);
  };

exports.getMaxMemory = j;

var q = module271.default(function* () {
    return h();
  }),
  z = function () {
    return q.apply(this, arguments);
  };

exports.getUsedMemory = z;

var H = module271.default(function* () {
    return S();
  }),
  J = function () {
    return H.apply(this, arguments);
  };

exports.getTotalMemory = J;

var K = module271.default(function* () {
    return navigator.getBattery
      ? navigator.getBattery().then(function (t) {
          return f(t);
        })
      : {};
  }),
  G = function () {
    return K.apply(this, arguments);
  };

exports.getPowerState = G;

exports.getPowerStateSync = function () {
  return s;
};
