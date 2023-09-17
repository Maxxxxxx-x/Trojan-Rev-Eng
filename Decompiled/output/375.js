var module125 = require('./125');

var n =
    'function' == typeof Object.is
      ? Object.is
      : function (t, n) {
          return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
        },
  e = module125.useState,
  u = module125.useEffect,
  r = module125.useLayoutEffect,
  s = module125.useDebugValue;

function a(t) {
  var e = t.getSnapshot;
  t = t.value;

  try {
    var u = e();
    return !n(t, u);
  } catch (t) {
    return true;
  }
}

exports.useSyncExternalStore =
  undefined !== module125.useSyncExternalStore
    ? module125.useSyncExternalStore
    : function (t, n) {
        var c = n(),
          o = e({
            inst: {
              value: c,
              getSnapshot: n,
            },
          }),
          f = o[0].inst,
          S = o[1];
        r(
          function () {
            f.value = c;
            f.getSnapshot = n;
            if (a(f))
              S({
                inst: f,
              });
          },
          [t, c, n]
        );
        u(
          function () {
            if (a(f))
              S({
                inst: f,
              });
            return t(function () {
              if (a(f))
                S({
                  inst: f,
                });
            });
          },
          [t]
        );
        s(c);
        return c;
      };
