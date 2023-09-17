var n = false,
  t = 0,
  c = {
    installReactHook: function () {
      true;
    },
    setEnabled: function (t) {
      if (n !== t) n = t;
    },
    isEnabled: function () {
      return n;
    },
    beginEvent: function (t, c) {
      if (n) {
        var o = 'function' == typeof t ? t() : t;
        globals.nativeTraceBeginSection(131072, o, c);
      }
    },
    endEvent: function () {
      if (n) globals.nativeTraceEndSection(131072);
    },
    beginAsyncEvent: function (c) {
      var o = t;

      if (n) {
        t++;
        var f = 'function' == typeof c ? c() : c;
        globals.nativeTraceBeginAsyncSection(131072, f, o);
      }

      return o;
    },
    endAsyncEvent: function (t, c) {
      if (n) {
        var o = 'function' == typeof t ? t() : t;
        globals.nativeTraceEndAsyncSection(131072, o, c);
      }
    },
    counterEvent: function (t, c) {
      if (n) {
        var o = 'function' == typeof t ? t() : t;
        if (globals.nativeTraceCounter) globals.nativeTraceCounter(131072, o, c);
      }
    },
  };
module.exports = c;
