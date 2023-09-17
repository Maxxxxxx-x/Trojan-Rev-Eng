function n() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (n) {
    return false;
  }
}

var e,
  module53 = (function (e, ...args) {
    require('./13')(s, e);

    var module53 = s,
      o = n(),
      module15 = function () {
        var n,
          module17 = require('./17')(module53);

        if (o) {
          var module17 = require('./17')(this).constructor;

          n = Reflect.construct(module17, arguments, module17);
        } else n = module17.apply(this, arguments);

        return require('./15')(this, n);
      };

    function s() {
      var n;

      require('./7')(this, s);

      (n = module15.call(this, ...args)).name = '';
      return n;
    }

    return require('./8')(s);
  })(require('./53')(Error)),
  o = false;

function c(n) {
  if (e && !o) {
    o = true;

    try {
      return e(n);
    } catch (n) {
    } finally {
      o = false;
    }
  }

  return n;
}

var s = 0;

function l(n, e, t) {
  var module57 = require('./57')(null == n ? undefined : n.stack),
    l = ++s,
    u = n.message || '',
    f = u;

  if (null != n.componentStack) f += '\n\nThis error is located at:' + n.componentStack;
  var p = null == n.name || '' === n.name ? '' : n.name + ': ';
  if (!f.startsWith(p)) f = p + f;
  var v = c({
    message: (f = null == n.jsEngine ? f : f + ', js engine: ' + n.jsEngine),
    originalMessage: f === u ? null : u,
    name: null == n.name || '' === n.name ? null : n.name,
    componentStack: 'string' == typeof n.componentStack ? n.componentStack : null,
    stack: module57,
    id: l,
    isFatal: e,
    extraData: {
      jsEngine: n.jsEngine,
      rawStack: n.stack,
    },
  });

  if ((t && console.error(v.message), e || 'warn' !== n.type)) {
    var module60 = require('./60').default;

    if (module60) module60.reportException(v);
  }
}

var u = false;

function f() {
  if (((n = console)._errorOriginal.apply(n, args), console.reportErrorsAsExceptions && !u)) {
    var s,
      f = args[0];
    if (null != f && f.stack) s = f;
    else {
      var module35 = require('./35').default;

      if ('string' == typeof f && f.startsWith('Warning: ')) return;
      var v = args
        .map(function (n) {
          return 'string' == typeof n ? n : module35(n);
        })
        .join(' ');
      (s = new module53(v)).name = 'console.error';
    }
    l(s, false, false);
  }
}

module.exports = {
  handleException: function (n, e) {
    var o;
    o = n instanceof Error ? n : new module53(n);

    try {
      u = true;
      l(o, e, true);
    } finally {
      u = false;
    }
  },
  installConsoleErrorReporter: function () {
    if (!console._errorOriginal) {
      console._errorOriginal = console.error.bind(console);
      console.error = f;
      if (undefined === console.reportErrorsAsExceptions) console.reportErrorsAsExceptions = true;
    }
  },
  SyntheticError: module53,
  unstable_setExceptionDecorator: function (n) {
    e = n;
  },
};
