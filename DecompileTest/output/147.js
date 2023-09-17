function n(n) {
  var module141 = require('./141').getConstants();

  if (module141.ViewManagerNames || module141.LazyViewManagersEnabled) n = t(n, require('./141').getDefaultEventTypes());
  else {
    n.bubblingEventTypes = t(n.bubblingEventTypes, module141.genericBubblingEventTypes);
    n.directEventTypes = t(n.directEventTypes, module141.genericDirectEventTypes);
  }
}

function t(n, s) {
  if (!s) return n;
  if (!n) return s;

  for (var u in s)
    if (s.hasOwnProperty(u)) {
      var o = s[u];

      if (n.hasOwnProperty(u)) {
        var c = n[u];
        if ('object' == typeof o && 'object' == typeof c) o = t(c, o);
      }

      n[u] = o;
    }

  return n;
}

function s(n) {
  switch (n) {
    case 'CATransform3D':
      return require('./151');

    case 'CGPoint':
      return require('./152');

    case 'CGSize':
      return require('./133');

    case 'UIEdgeInsets':
      return require('./153');

    case 'Point':
      return require('./152');

    case 'EdgeInsets':
      return require('./153');
  }

  return null;
}

function u(n) {
  switch (n) {
    case 'CGColor':
    case 'UIColor':
      return require('./134');

    case 'CGColorArray':
    case 'UIColorArray':
      return require('./154');

    case 'CGImage':
    case 'UIImage':
    case 'RCTImageSource':
      return require('./155');

    case 'Color':
      return require('./134');

    case 'ColorArray':
      return require('./154');

    case 'ImageSource':
      return require('./155');
  }

  return null;
}

module.exports = function (t) {
  var o,
    c,
    module141 = require('./141').getViewManagerConfig(t);

  require('./20')(null != module141 && null != module141.NativeProps, 'requireNativeComponent: "%s" was not found in the UIManager.', t);

  var v = module141.baseModuleName,
    b = module141.bubblingEventTypes,
    f = module141.directEventTypes,
    p = module141.NativeProps;

  for (b = null != (o = b) ? o : {}, f = null != (c = f) ? c : {}; v; ) {
    var module141 = require('./141').getViewManagerConfig(v);

    if (module141) {
      b = Object.assign({}, module141.bubblingEventTypes, b);
      f = Object.assign({}, module141.directEventTypes, f);
      p = Object.assign({}, module141.NativeProps, p);
      v = module141.baseModuleName;
    } else v = null;
  }

  var C = {};

  for (var E in p) {
    var T = p[E],
      I = s(T),
      w = u(T);
    C[E] =
      null == I
        ? null == w || {
            process: w,
          }
        : null == w
        ? {
            diff: I,
          }
        : {
            diff: I,
            process: w,
          };
  }

  C.style = require('./148');
  Object.assign(module141, {
    uiViewClassName: t,
    validAttributes: C,
    bubblingEventTypes: b,
    directEventTypes: f,
  });
  n(module141);
  return module141;
};
