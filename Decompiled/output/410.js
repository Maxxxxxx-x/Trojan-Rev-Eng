exports.getDeviceToken = $r;
exports.getFreeDiskStorageOld = Un;
exports.getFreeDiskStorageOldSync = Rn;
exports.getMacAddress = E;
exports.getMacAddressSync = q;
exports.getReadableVersion = ye;
exports.getTotalDiskCapacityOld = Tn;
exports.getTotalDiskCapacityOldSync = On;
exports.hasDynamicIsland = xt;
exports.hasNotch = _t;
exports.hasSystemFeature = Ir;
exports.hasSystemFeatureSync = br;
exports.isLandscape = er;
exports.isLandscapeSync = nr;
exports.isLowBatteryLevel = Fr;
exports.syncUniqueId = P;
exports.useBatteryLevel = no;
exports.useBatteryLevelIsLow = ro;
exports.useBrightness = fo;
exports.useDeviceName = io;
exports.useFirstInstallTime = uo;
exports.useHasSystemFeature = so;
exports.useIsEmulator = lo;
exports.useIsHeadphonesConnected = ao;
exports.useManufacturer = co;
exports.usePowerState = oo;

var module271 = require('@babel/runtime/helpers/interopRequireDefault')(require('./271')),
  module25 = require('@babel/runtime/helpers/interopRequireDefault')(require('./25')),
  module125 = require('./125'),
  ReactNative = require('react-native'),
  module411 = require('@babel/runtime/helpers/interopRequireDefault')(require('./411')),
  module412 = require('@babel/runtime/helpers/interopRequireDefault')(require('./412')),
  module413 = require('@babel/runtime/helpers/interopRequireDefault')(require('./413')),
  module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'uniqueId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getUniqueId();
    },
    syncGetter: function () {
      return module413.default.getUniqueIdSync();
    },
    defaultValue: 'unknown',
  }),
  y = module25.default(module415, 2),
  p = y[0],
  S = y[1];

function P() {
  return v.apply(this, arguments);
}

function v() {
  return (v = module271.default(function* () {
    return 'ios' === ReactNative.Platform.OS ? yield module413.default.syncUniqueId() : yield p();
  })).apply(this, arguments);
}

exports.getUniqueIdSync = S;
exports.getUniqueId = p;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'instanceId',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getInstanceId();
    },
    syncGetter: function () {
      return module413.default.getInstanceIdSync();
    },
    defaultValue: 'unknown',
  }),
  w = module25.default(module415, 2),
  b = w[0],
  F = w[1];

exports.getInstanceIdSync = F;
exports.getInstanceId = b;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'serialNumber',
    supportedPlatforms: ['android', 'windows'],
    getter: function () {
      return module413.default.getSerialNumber();
    },
    syncGetter: function () {
      return module413.default.getSerialNumberSync();
    },
    defaultValue: 'unknown',
  }),
  A = module25.default(module415, 2),
  k = A[0],
  C = A[1];

exports.getSerialNumberSync = C;
exports.getSerialNumber = k;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'androidId',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getAndroidId();
    },
    syncGetter: function () {
      return module413.default.getAndroidIdSync();
    },
    defaultValue: 'unknown',
  }),
  D = module25.default(module415, 2),
  V = D[0],
  M = D[1];

exports.getAndroidIdSync = M;
exports.getAndroidId = V;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getIpAddress();
    },
    syncGetter: function () {
      return module413.default.getIpAddressSync();
    },
    defaultValue: 'unknown',
  }),
  L = module25.default(module415, 2),
  O = L[0],
  G = L[1];

exports.getIpAddressSync = G;
exports.getIpAddress = O;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module413.default.isCameraPresent();
    },
    syncGetter: function () {
      return module413.default.isCameraPresentSync();
    },
    defaultValue: false,
  }),
  K = module25.default(module415, 2),
  H = K[0],
  U = K[1];

function E() {
  return R.apply(this, arguments);
}

function R() {
  return (R = module271.default(function* () {
    return 'android' === ReactNative.Platform.OS ? module413.default.getMacAddress() : 'ios' === ReactNative.Platform.OS ? '02:00:00:00:00:00' : 'unknown';
  })).apply(this, arguments);
}

function q() {
  return 'android' === ReactNative.Platform.OS ? module413.default.getMacAddressSync() : 'ios' === ReactNative.Platform.OS ? '02:00:00:00:00:00' : 'unknown';
}

exports.isCameraPresentSync = U;
exports.isCameraPresent = H;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    memoKey: 'deviceId',
    getter: function () {
      return module413.default.deviceId;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
  });
};

exports.getDeviceId = module415;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'manufacturer',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return 'ios' == ReactNative.Platform.OS ? Promise.resolve('Apple') : module413.default.getSystemManufacturer();
    },
    syncGetter: function () {
      return 'ios' == ReactNative.Platform.OS ? 'Apple' : module413.default.getSystemManufacturerSync();
    },
    defaultValue: 'unknown',
  }),
  Z = module25.default(module415, 2),
  j = Z[0],
  z = Z[1];

exports.getManufacturerSync = z;
exports.getManufacturer = j;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'model',
    defaultValue: 'unknown',
    supportedPlatforms: ['ios', 'android', 'windows'],
    getter: function () {
      return module413.default.model;
    },
  });
};

exports.getModel = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'brand',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module413.default.brand;
    },
  });
};

exports.getBrand = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    supportedPlatforms: ['ios', 'android', 'windows'],
    memoKey: 'systemName',
    getter: function () {
      return ReactNative.Platform.select({
        ios: module413.default.systemName,
        android: 'Android',
        windows: 'Windows',
        default: 'unknown',
      });
    },
  });
};

exports.getSystemName = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    getter: function () {
      return module413.default.systemVersion;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
    memoKey: 'systemVersion',
  });
};

exports.getSystemVersion = module415;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'buildId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getBuildId();
    },
    syncGetter: function () {
      return module413.default.getBuildIdSync();
    },
    defaultValue: 'unknown',
  }),
  $ = module25.default(module415, 2),
  ee = $[0],
  te = $[1];

exports.getBuildIdSync = te;
exports.getBuildId = ee;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'apiLevel',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getApiLevel();
    },
    syncGetter: function () {
      return module413.default.getApiLevelSync();
    },
    defaultValue: -1,
  }),
  re = module25.default(module415, 2),
  oe = re[0],
  ae = re[1];

exports.getApiLevelSync = ae;
exports.getApiLevel = oe;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'bundleId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module413.default.bundleId;
    },
  });
};

exports.getBundleId = module415;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'installerPackageName',
    supportedPlatforms: ['android', 'windows', 'ios'],
    getter: function () {
      return module413.default.getInstallerPackageName();
    },
    syncGetter: function () {
      return module413.default.getInstallerPackageNameSync();
    },
    defaultValue: 'unknown',
  }),
  ie = module25.default(module415, 2),
  se = ie[0],
  le = ie[1];

exports.getInstallerPackageNameSync = le;
exports.getInstallerPackageName = se;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'appName',
    defaultValue: 'unknown',
    getter: function () {
      return module413.default.appName;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
  });
};

exports.getApplicationName = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'buildNumber',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.buildNumber;
    },
    defaultValue: 'unknown',
  });
};

exports.getBuildNumber = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'version',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.appVersion;
    },
  });
};

function ye() {
  return module415() + '.' + module415();
}

exports.getVersion = module415;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getDeviceName();
    },
    syncGetter: function () {
      return module413.default.getDeviceNameSync();
    },
    defaultValue: 'unknown',
  }),
  me = module25.default(module415, 2),
  Se = me[0],
  Pe = me[1];

exports.getDeviceNameSync = Pe;
exports.getDeviceName = Se;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module413.default.getUsedMemory();
    },
    syncGetter: function () {
      return module413.default.getUsedMemorySync();
    },
    defaultValue: -1,
  }),
  Ie = module25.default(module415, 2),
  we = Ie[0],
  be = Ie[1];

exports.getUsedMemorySync = be;
exports.getUsedMemory = we;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoAsync({
    memoKey: 'userAgent',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'ios', 'web'],
    getter: function () {
      return module413.default.getUserAgent();
    },
  });
};

exports.getUserAgent = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'userAgentSync',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'web'],
    getter: function () {
      return module413.default.getUserAgentSync();
    },
  });
};

exports.getUserAgentSync = module415;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getFontScale();
    },
    syncGetter: function () {
      return module413.default.getFontScaleSync();
    },
    defaultValue: -1,
  }),
  ke = module25.default(module415, 2),
  Ce = ke[0],
  Be = ke[1];

exports.getFontScaleSync = Be;
exports.getFontScale = Ce;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'bootloader',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getBootloader();
    },
    syncGetter: function () {
      return module413.default.getBootloaderSync();
    },
    defaultValue: 'unknown',
  }),
  Ve = module25.default(module415, 2),
  Me = Ve[0],
  Te = Ve[1];

exports.getBootloaderSync = Te;
exports.getBootloader = Me;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    getter: function () {
      return module413.default.getDevice();
    },
    syncGetter: function () {
      return module413.default.getDeviceSync();
    },
    defaultValue: 'unknown',
    memoKey: 'device',
    supportedPlatforms: ['android'],
  }),
  Oe = module25.default(module415, 2),
  Ge = Oe[0],
  Ne = Oe[1];

exports.getDeviceSync = Ne;
exports.getDevice = Ge;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'display',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getDisplay();
    },
    syncGetter: function () {
      return module413.default.getDisplaySync();
    },
    defaultValue: 'unknown',
  }),
  He = module25.default(module415, 2),
  Ue = He[0],
  Ee = He[1];

exports.getDisplaySync = Ee;
exports.getDisplay = Ue;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'fingerprint',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getFingerprint();
    },
    syncGetter: function () {
      return module413.default.getFingerprintSync();
    },
    defaultValue: 'unknown',
  }),
  qe = module25.default(module415, 2),
  _e = qe[0],
  xe = qe[1];

exports.getFingerprintSync = xe;
exports.getFingerprint = _e;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'hardware',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getHardware();
    },
    syncGetter: function () {
      return module413.default.getHardwareSync();
    },
    defaultValue: 'unknown',
  }),
  je = module25.default(module415, 2),
  ze = je[0],
  We = je[1];

exports.getHardwareSync = We;
exports.getHardware = ze;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'host',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getHost();
    },
    syncGetter: function () {
      return module413.default.getHostSync();
    },
    defaultValue: 'unknown',
  }),
  Qe = module25.default(module415, 2),
  Xe = Qe[0],
  Ye = Qe[1];

exports.getHostSync = Ye;
exports.getHost = Xe;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'product',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getProduct();
    },
    syncGetter: function () {
      return module413.default.getProductSync();
    },
    defaultValue: 'unknown',
  }),
  et = module25.default(module415, 2),
  tt = et[0],
  nt = et[1];

exports.getProductSync = nt;
exports.getProduct = tt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'tags',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getTags();
    },
    syncGetter: function () {
      return module413.default.getTagsSync();
    },
    defaultValue: 'unknown',
  }),
  ot = module25.default(module415, 2),
  at = ot[0],
  ut = ot[1];

exports.getTagsSync = ut;
exports.getTags = at;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'type',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getType();
    },
    syncGetter: function () {
      return module413.default.getTypeSync();
    },
    defaultValue: 'unknown',
  }),
  it = module25.default(module415, 2),
  st = it[0],
  lt = it[1];

exports.getTypeSync = lt;
exports.getType = st;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'baseOs',
    supportedPlatforms: ['android', 'web', 'windows'],
    getter: function () {
      return module413.default.getBaseOs();
    },
    syncGetter: function () {
      return module413.default.getBaseOsSync();
    },
    defaultValue: 'unknown',
  }),
  ft = module25.default(module415, 2),
  gt = ft[0],
  yt = ft[1];

exports.getBaseOsSync = yt;
exports.getBaseOs = gt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'previewSdkInt',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getPreviewSdkInt();
    },
    syncGetter: function () {
      return module413.default.getPreviewSdkIntSync();
    },
    defaultValue: -1,
  }),
  mt = module25.default(module415, 2),
  St = mt[0],
  Pt = mt[1];

exports.getPreviewSdkIntSync = Pt;
exports.getPreviewSdkInt = St;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'securityPatch',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getSecurityPatch();
    },
    syncGetter: function () {
      return module413.default.getSecurityPatchSync();
    },
    defaultValue: 'unknown',
  }),
  It = module25.default(module415, 2),
  wt = It[0],
  bt = It[1];

exports.getSecurityPatchSync = bt;
exports.getSecurityPatch = wt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'codeName',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getCodename();
    },
    syncGetter: function () {
      return module413.default.getCodenameSync();
    },
    defaultValue: 'unknown',
  }),
  ht = module25.default(module415, 2),
  At = ht[0],
  kt = ht[1];

exports.getCodenameSync = kt;
exports.getCodename = At;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'incremental',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getIncremental();
    },
    syncGetter: function () {
      return module413.default.getIncrementalSync();
    },
    defaultValue: 'unknown',
  }),
  Bt = module25.default(module415, 2),
  Dt = Bt[0],
  Vt = Bt[1];

exports.getIncrementalSync = Vt;
exports.getIncremental = Dt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'emulator',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.isEmulator();
    },
    syncGetter: function () {
      return module413.default.isEmulatorSync();
    },
    defaultValue: false,
  }),
  Tt = module25.default(module415, 2),
  Lt = Tt[0],
  Ot = Tt[1];

exports.isEmulatorSync = Ot;
exports.isEmulator = Lt;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    defaultValue: false,
    supportedPlatforms: ['android', 'ios', 'windows'],
    memoKey: 'tablet',
    getter: function () {
      return module413.default.isTablet;
    },
  });
};

exports.isTablet = module415;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    defaultValue: false,
    supportedPlatforms: ['ios'],
    memoKey: 'zoomed',
    getter: function () {
      return module413.default.isDisplayZoomed;
    },
  });
};

exports.isDisplayZoomed = module415;

var Kt,
  Ht,
  module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.isPinOrFingerprintSet();
    },
    syncGetter: function () {
      return module413.default.isPinOrFingerprintSetSync();
    },
    defaultValue: false,
  }),
  Et = module25.default(module415, 2),
  Rt = Et[0],
  qt = Et[1];

function _t() {
  if (undefined === Kt) {
    var t = module415(),
      n = module415();
    Kt =
      -1 !==
      module412.default.findIndex(function (o) {
        return o.brand.toLowerCase() === t.toLowerCase() && o.model.toLowerCase() === n.toLowerCase();
      });
  }

  return Kt;
}

function xt() {
  if (undefined === Ht) {
    var t = module415(),
      n = module415();
    Ht =
      -1 !==
      module411.default.findIndex(function (o) {
        return o.brand.toLowerCase() === t.toLowerCase() && o.model.toLowerCase() === n.toLowerCase();
      });
  }

  return Ht;
}

exports.isPinOrFingerprintSetSync = qt;
exports.isPinOrFingerprintSet = Rt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.hasGms();
    },
    syncGetter: function () {
      return module413.default.hasGmsSync();
    },
    defaultValue: false,
  }),
  jt = module25.default(module415, 2),
  zt = jt[0],
  Wt = jt[1];

exports.hasGmsSync = Wt;
exports.hasGms = zt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.hasHms();
    },
    syncGetter: function () {
      return module413.default.hasHmsSync();
    },
    defaultValue: false,
  }),
  Qt = module25.default(module415, 2),
  Xt = Qt[0],
  Yt = Qt[1];

exports.hasHmsSync = Yt;
exports.hasHms = Xt;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'firstInstallTime',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getFirstInstallTime();
    },
    syncGetter: function () {
      return module413.default.getFirstInstallTimeSync();
    },
    defaultValue: -1,
  }),
  en = module25.default(module415, 2),
  tn = en[0],
  nn = en[1];

exports.getFirstInstallTimeSync = nn;
exports.getFirstInstallTime = tn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'installReferrer',
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module413.default.getInstallReferrer();
    },
    syncGetter: function () {
      return module413.default.getInstallReferrerSync();
    },
    defaultValue: 'unknown',
  }),
  on = module25.default(module415, 2),
  an = on[0],
  un = on[1];

exports.getInstallReferrerSync = un;
exports.getInstallReferrer = an;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'lastUpdateTime',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getLastUpdateTime();
    },
    syncGetter: function () {
      return module413.default.getLastUpdateTimeSync();
    },
    defaultValue: -1,
  }),
  sn = module25.default(module415, 2),
  ln = sn[0],
  cn = sn[1];

exports.getLastUpdateTimeSync = cn;
exports.getLastUpdateTime = ln;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getPhoneNumber();
    },
    syncGetter: function () {
      return module413.default.getPhoneNumberSync();
    },
    defaultValue: 'unknown',
  }),
  gn = module25.default(module415, 2),
  yn = gn[0],
  pn = gn[1];

exports.getPhoneNumberSync = pn;
exports.getPhoneNumber = yn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module413.default.getCarrier();
    },
    syncGetter: function () {
      return module413.default.getCarrierSync();
    },
    defaultValue: 'unknown',
  }),
  Sn = module25.default(module415, 2),
  Pn = Sn[0],
  vn = Sn[1];

exports.getCarrierSync = vn;
exports.getCarrier = Pn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'totalMemory',
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module413.default.getTotalMemory();
    },
    syncGetter: function () {
      return module413.default.getTotalMemorySync();
    },
    defaultValue: -1,
  }),
  wn = module25.default(module415, 2),
  bn = wn[0],
  Fn = wn[1];

exports.getTotalMemorySync = Fn;
exports.getTotalMemory = bn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: 'maxMemory',
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module413.default.getMaxMemory();
    },
    syncGetter: function () {
      return module413.default.getMaxMemorySync();
    },
    defaultValue: -1,
  }),
  An = module25.default(module415, 2),
  kn = An[0],
  Cn = An[1];

exports.getMaxMemorySync = Cn;
exports.getMaxMemory = kn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module413.default.getTotalDiskCapacity();
    },
    syncGetter: function () {
      return module413.default.getTotalDiskCapacitySync();
    },
    defaultValue: -1,
  }),
  Dn = module25.default(module415, 2),
  Vn = Dn[0],
  Mn = Dn[1];

function Tn() {
  return Ln.apply(this, arguments);
}

function Ln() {
  return (Ln = module271.default(function* () {
    return 'android' === ReactNative.Platform.OS
      ? module413.default.getTotalDiskCapacityOld()
      : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
      ? Vn()
      : -1;
  })).apply(this, arguments);
}

function On() {
  return 'android' === ReactNative.Platform.OS
    ? module413.default.getTotalDiskCapacityOldSync()
    : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
    ? Mn()
    : -1;
}

exports.getTotalDiskCapacitySync = Mn;
exports.getTotalDiskCapacity = Vn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module413.default.getFreeDiskStorage();
    },
    syncGetter: function () {
      return module413.default.getFreeDiskStorageSync();
    },
    defaultValue: -1,
  }),
  Nn = module25.default(module415, 2),
  Kn = Nn[0],
  Hn = Nn[1];

function Un() {
  return En.apply(this, arguments);
}

function En() {
  return (En = module271.default(function* () {
    return 'android' === ReactNative.Platform.OS
      ? module413.default.getFreeDiskStorageOld()
      : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
      ? Kn()
      : -1;
  })).apply(this, arguments);
}

function Rn() {
  return 'android' === ReactNative.Platform.OS
    ? module413.default.getFreeDiskStorageOldSync()
    : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
    ? Hn()
    : -1;
}

exports.getFreeDiskStorageSync = Hn;
exports.getFreeDiskStorage = Kn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module413.default.getBatteryLevel();
    },
    syncGetter: function () {
      return module413.default.getBatteryLevelSync();
    },
    defaultValue: -1,
  }),
  _n = module25.default(module415, 2),
  xn = _n[0],
  Zn = _n[1];

exports.getBatteryLevelSync = Zn;
exports.getBatteryLevel = xn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['ios', 'android', 'windows', 'web'],
    getter: function () {
      return module413.default.getPowerState();
    },
    syncGetter: function () {
      return module413.default.getPowerStateSync();
    },
    defaultValue: {},
  }),
  zn = module25.default(module415, 2),
  Wn = zn[0],
  Jn = zn[1];

exports.getPowerStateSync = Jn;
exports.getPowerState = Wn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module413.default.isBatteryCharging();
    },
    syncGetter: function () {
      return module413.default.isBatteryChargingSync();
    },
    defaultValue: false,
  }),
  Xn = module25.default(module415, 2),
  Yn = Xn[0],
  $n = Xn[1];

function er() {
  return tr.apply(this, arguments);
}

function tr() {
  return (tr = module271.default(function* () {
    return Promise.resolve(nr());
  })).apply(this, arguments);
}

function nr() {
  var t = ReactNative.Dimensions.get('window'),
    n = t.height;
  return t.width >= n;
}

exports.isBatteryChargingSync = $n;
exports.isBatteryCharging = Yn;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'web'],
    getter: function () {
      return module413.default.isAirplaneMode();
    },
    syncGetter: function () {
      return module413.default.isAirplaneModeSync();
    },
    defaultValue: false,
  }),
  or = module25.default(module415, 2),
  ar = or[0],
  ur = or[1];

exports.isAirplaneModeSync = ur;
exports.isAirplaneMode = ar;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'deviceType',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module413.default.deviceType;
    },
  });
};

exports.getDeviceType = module415;

exports.getDeviceTypeSync = function () {
  return require('./415').getSupportedPlatformInfoSync({
    memoKey: 'deviceType',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module413.default.deviceType;
    },
  });
};

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: '_supportedAbis',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module413.default.getSupportedAbis();
    },
    syncGetter: function () {
      return module413.default.getSupportedAbisSync();
    },
    defaultValue: [],
  }),
  sr = module25.default(module415, 2),
  lr = sr[0],
  cr = sr[1];

exports.supportedAbisSync = cr;
exports.supportedAbis = lr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: '_supported32BitAbis',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getSupported32BitAbis();
    },
    syncGetter: function () {
      return module413.default.getSupported32BitAbisSync();
    },
    defaultValue: [],
  }),
  gr = module25.default(module415, 2),
  yr = gr[0],
  pr = gr[1];

exports.supported32BitAbisSync = pr;
exports.supported32BitAbis = yr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    memoKey: '_supported64BitAbis',
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getSupported64BitAbis();
    },
    syncGetter: function () {
      return module413.default.getSupported64BitAbisSync();
    },
    defaultValue: [],
  }),
  Sr = module25.default(module415, 2),
  Pr = Sr[0],
  vr = Sr[1];

function Ir(t) {
  return wr.apply(this, arguments);
}

function wr() {
  return (wr = module271.default(function* (t) {
    return 'android' === ReactNative.Platform.OS && module413.default.hasSystemFeature(t);
  })).apply(this, arguments);
}

function br(t) {
  return 'android' === ReactNative.Platform.OS && module413.default.hasSystemFeatureSync(t);
}

function Fr(t) {
  return 'android' === ReactNative.Platform.OS ? t < 0.15 : t < 0.2;
}

exports.supported64BitAbisSync = vr;
exports.supported64BitAbis = Pr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module413.default.getSystemAvailableFeatures();
    },
    syncGetter: function () {
      return module413.default.getSystemAvailableFeaturesSync();
    },
    defaultValue: [],
  }),
  Ar = module25.default(module415, 2),
  kr = Ar[0],
  Cr = Ar[1];

exports.getSystemAvailableFeaturesSync = Cr;
exports.getSystemAvailableFeatures = kr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'web'],
    getter: function () {
      return module413.default.isLocationEnabled();
    },
    syncGetter: function () {
      return module413.default.isLocationEnabledSync();
    },
    defaultValue: false,
  }),
  Dr = module25.default(module415, 2),
  Vr = Dr[0],
  Mr = Dr[1];

exports.isLocationEnabledSync = Mr;
exports.isLocationEnabled = Vr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module413.default.isHeadphonesConnected();
    },
    syncGetter: function () {
      return module413.default.isHeadphonesConnectedSync();
    },
    defaultValue: false,
  }),
  Lr = module25.default(module415, 2),
  Or = Lr[0],
  Gr = Lr[1];

exports.isHeadphonesConnectedSync = Gr;
exports.isHeadphonesConnected = Or;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['windows'],
    getter: function () {
      return module413.default.isMouseConnected();
    },
    syncGetter: function () {
      return module413.default.isMouseConnectedSync();
    },
    defaultValue: false,
  }),
  Kr = module25.default(module415, 2),
  Hr = Kr[0],
  Ur = Kr[1];

exports.isMouseConnectedSync = Ur;
exports.isMouseConnected = Hr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['windows'],
    getter: function () {
      return module413.default.isKeyboardConnected();
    },
    syncGetter: function () {
      return module413.default.isKeyboardConnectedSync();
    },
    defaultValue: false,
  }),
  Rr = module25.default(module415, 2),
  qr = Rr[0],
  _r = Rr[1];

exports.isKeyboardConnectedSync = _r;
exports.isKeyboardConnected = qr;

var module415 = function () {
  return require('./415').getSupportedPlatformInfoAsync({
    supportedPlatforms: ['windows'],
    getter: function () {
      return module413.default.isTabletMode();
    },
    defaultValue: false,
  });
};

exports.isTabletMode = module415;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module413.default.getAvailableLocationProviders();
    },
    syncGetter: function () {
      return module413.default.getAvailableLocationProvidersSync();
    },
    defaultValue: {},
  }),
  jr = module25.default(module415, 2),
  zr = jr[0],
  Wr = jr[1];

exports.getAvailableLocationProvidersSync = Wr;
exports.getAvailableLocationProviders = zr;

var module415 = require('./415').getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['ios'],
    getter: function () {
      return module413.default.getBrightness();
    },
    syncGetter: function () {
      return module413.default.getBrightnessSync();
    },
    defaultValue: -1,
  }),
  Qr = module25.default(module415, 2),
  Xr = Qr[0],
  Yr = Qr[1];

function $r() {
  return eo.apply(this, arguments);
}

function eo() {
  return (eo = module271.default(function* () {
    return 'ios' === ReactNative.Platform.OS ? module413.default.getDeviceToken() : 'unknown';
  })).apply(this, arguments);
}

exports.getBrightnessSync = Yr;
exports.getBrightness = Xr;
var to = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo);

function no() {
  var u = module125.useState(null),
    s = module25.default(u, 2),
    l = s[0],
    c = s[1];
  module125.useEffect(function () {
    var n;
    ((n = module271.default(function* () {
      var t = yield xn();
      c(t);
    })),
    function () {
      return n.apply(this, arguments);
    })();
    var o = to.addListener('RNDeviceInfo_batteryLevelDidChange', function (t) {
      c(t);
    });
    return function () {
      return o.remove();
    };
  }, []);
  return l;
}

function ro() {
  var u = module125.useState(null),
    s = module25.default(u, 2),
    l = s[0],
    c = s[1];
  module125.useEffect(function () {
    var n;
    ((n = module271.default(function* () {
      var t = yield xn();
      if (Fr(t)) c(t);
    })),
    function () {
      return n.apply(this, arguments);
    })();
    var o = to.addListener('RNDeviceInfo_batteryLevelIsLow', function (t) {
      c(t);
    });
    return function () {
      return o.remove();
    };
  }, []);
  return l;
}

function oo() {
  var u = module125.useState({}),
    s = module25.default(u, 2),
    l = s[0],
    c = s[1];
  module125.useEffect(function () {
    var n;
    ((n = module271.default(function* () {
      var t = yield Wn();
      c(t);
    })),
    function () {
      return n.apply(this, arguments);
    })();
    var o = to.addListener('RNDeviceInfo_powerStateDidChange', function (t) {
      c(t);
    });
    return function () {
      return o.remove();
    };
  }, []);
  return l;
}

function ao() {
  return require('./416').useOnEvent('RNDeviceInfo_headphoneConnectionDidChange', Or, false);
}

function uo() {
  return require('./416').useOnMount(tn, -1);
}

function io() {
  return require('./416').useOnMount(Se, 'unknown');
}

function so(t) {
  var n = module125.useCallback(
    function () {
      return Ir(t);
    },
    [t]
  );
  return require('./416').useOnMount(n, false);
}

function lo() {
  return require('./416').useOnMount(Lt, false);
}

function co() {
  return require('./416').useOnMount(j, 'unknown');
}

function fo() {
  var u = module125.useState(null),
    s = module25.default(u, 2),
    l = s[0],
    c = s[1];
  module125.useEffect(function () {
    var n;
    ((n = module271.default(function* () {
      var t = yield Xr();
      c(t);
    })),
    function () {
      return n.apply(this, arguments);
    })();
    var o = to.addListener('RNDeviceInfo_brightnessDidChange', function (t) {
      c(t);
    });
    return function () {
      return o.remove();
    };
  }, []);
  return l;
}

var go = {
  getAndroidId: V,
  getAndroidIdSync: M,
  getApiLevel: oe,
  getApiLevelSync: ae,
  getApplicationName: module415,
  getAvailableLocationProviders: zr,
  getAvailableLocationProvidersSync: Wr,
  getBaseOs: gt,
  getBaseOsSync: yt,
  getBatteryLevel: xn,
  getBatteryLevelSync: Zn,
  getBootloader: Me,
  getBootloaderSync: Te,
  getBrand: module415,
  getBuildId: ee,
  getBuildIdSync: te,
  getBuildNumber: module415,
  getBundleId: module415,
  getCarrier: Pn,
  getCarrierSync: vn,
  getCodename: At,
  getCodenameSync: kt,
  getDevice: Ge,
  getDeviceId: module415,
  getDeviceName: Se,
  getDeviceNameSync: Pe,
  getDeviceSync: Ne,
  getDeviceToken: $r,
  getDeviceType: module415,
  getDisplay: Ue,
  getDisplaySync: Ee,
  getFingerprint: _e,
  getFingerprintSync: xe,
  getFirstInstallTime: tn,
  getFirstInstallTimeSync: nn,
  getFontScale: Ce,
  getFontScaleSync: Be,
  getFreeDiskStorage: Kn,
  getFreeDiskStorageOld: Un,
  getFreeDiskStorageSync: Hn,
  getFreeDiskStorageOldSync: Rn,
  getHardware: ze,
  getHardwareSync: We,
  getHost: Xe,
  getHostSync: Ye,
  getIncremental: Dt,
  getIncrementalSync: Vt,
  getInstallerPackageName: se,
  getInstallerPackageNameSync: le,
  getInstallReferrer: an,
  getInstallReferrerSync: un,
  getInstanceId: b,
  getInstanceIdSync: F,
  getIpAddress: O,
  getIpAddressSync: G,
  getLastUpdateTime: ln,
  getLastUpdateTimeSync: cn,
  getMacAddress: E,
  getMacAddressSync: q,
  getManufacturer: j,
  getManufacturerSync: z,
  getMaxMemory: kn,
  getMaxMemorySync: Cn,
  getModel: module415,
  getPhoneNumber: yn,
  getPhoneNumberSync: pn,
  getPowerState: Wn,
  getPowerStateSync: Jn,
  getPreviewSdkInt: St,
  getPreviewSdkIntSync: Pt,
  getProduct: tt,
  getProductSync: nt,
  getReadableVersion: ye,
  getSecurityPatch: wt,
  getSecurityPatchSync: bt,
  getSerialNumber: k,
  getSerialNumberSync: C,
  getSystemAvailableFeatures: kr,
  getSystemAvailableFeaturesSync: Cr,
  getSystemName: module415,
  getSystemVersion: module415,
  getTags: at,
  getTagsSync: ut,
  getTotalDiskCapacity: Vn,
  getTotalDiskCapacityOld: Tn,
  getTotalDiskCapacitySync: Mn,
  getTotalDiskCapacityOldSync: On,
  getTotalMemory: bn,
  getTotalMemorySync: Fn,
  getType: st,
  getTypeSync: lt,
  getUniqueId: p,
  getUniqueIdSync: S,
  getUsedMemory: we,
  getUsedMemorySync: be,
  getUserAgent: module415,
  getUserAgentSync: module415,
  getVersion: module415,
  getBrightness: Xr,
  getBrightnessSync: Yr,
  hasGms: zt,
  hasGmsSync: Wt,
  hasHms: Xt,
  hasHmsSync: Yt,
  hasNotch: _t,
  hasDynamicIsland: xt,
  hasSystemFeature: Ir,
  hasSystemFeatureSync: br,
  isAirplaneMode: ar,
  isAirplaneModeSync: ur,
  isBatteryCharging: Yn,
  isBatteryChargingSync: $n,
  isCameraPresent: H,
  isCameraPresentSync: U,
  isEmulator: Lt,
  isEmulatorSync: Ot,
  isHeadphonesConnected: Or,
  isHeadphonesConnectedSync: Gr,
  isLandscape: er,
  isLandscapeSync: nr,
  isLocationEnabled: Vr,
  isLocationEnabledSync: Mr,
  isPinOrFingerprintSet: Rt,
  isPinOrFingerprintSetSync: qt,
  isMouseConnected: Hr,
  isMouseConnectedSync: Ur,
  isKeyboardConnected: qr,
  isKeyboardConnectedSync: _r,
  isTabletMode: module415,
  isTablet: module415,
  isDisplayZoomed: module415,
  supported32BitAbis: yr,
  supported32BitAbisSync: pr,
  supported64BitAbis: Pr,
  supported64BitAbisSync: vr,
  supportedAbis: lr,
  supportedAbisSync: cr,
  syncUniqueId: P,
  useBatteryLevel: no,
  useBatteryLevelIsLow: ro,
  useDeviceName: io,
  useFirstInstallTime: uo,
  useHasSystemFeature: so,
  useIsEmulator: lo,
  usePowerState: oo,
  useManufacturer: co,
  useIsHeadphonesConnected: ao,
  useBrightness: fo,
};
exports.default = go;
