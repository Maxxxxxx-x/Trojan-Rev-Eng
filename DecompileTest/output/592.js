var module125 = require('./125');

var u =
    'function' == typeof Object.is
      ? Object.is
      : function (e, u) {
          return e === u ? 0 !== e || 1 / e == 1 / u : e != e && u != u;
        },
  n = module125.useRef,
  t = module125.useEffect,
  l = module125.useMemo,
  a = module125.useDebugValue;

exports.useSyncExternalStoreWithSelector = function (e, c, f, o, v) {
  var s = n(null);

  if (null === s.current) {
    var d = {
      hasValue: false,
      value: null,
    };
    s.current = d;
  } else d = s.current;

  s = l(
    function () {
      function e(e) {
        if (!l) {
          if (((l = true), (n = e), (e = o(e)), undefined !== v && d.hasValue)) {
            var a = d.value;

            if (v(a, e)) {
              t = a;
              return (t = a);
            }
          }

          return (t = e);
        }

        if (((a = t), u(n, e))) return a;
        var c = o(e);
        return void 0 !== v && v(a, c) ? a : ((n = e), (t = c));
      }

      var n,
        t,
        l = !1,
        a = void 0 === f ? null : f;
      return [
        function () {
          return e(c());
        },
        null === a
          ? void 0
          : function () {
              return e(a());
            },
      ];
    },
    [c, f, o, v]
  );

  var S = require(_d[1]).useSyncExternalStore(e, s[0], s[1]);

  t(
    function () {
      d.hasValue = !0;
      d.value = S;
    },
    [S]
  );
  a(S);
  return S;
};
