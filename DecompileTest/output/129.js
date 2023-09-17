require('./125');

var n = null,
  u = new Set();

function t(u) {
  if (n !== u && null != u) n = u;
}

function o(u) {
  if (n === u && null != u) n = null;
}

module.exports = {
  currentlyFocusedInput: function () {
    return n;
  },
  focusInput: t,
  blurInput: o,
  currentlyFocusedField: function () {
    return require('./44').findNodeHandle(n);
  },
  focusField: function (n) {},
  blurField: function (n) {},
  focusTextInput: function (u) {
    if ('number' != typeof u && null != u) {
      var o;
      if (n === u || false === (null == (o = u.currentProps) ? undefined : o.editable)) return;
      t(u);

      require('./130').Commands.focus(u);
    }
  },
  blurTextInput: function (u) {
    if ('number' != typeof u && n === u && null != u) {
      o(u);

      require('./130').Commands.blur(u);
    }
  },
  registerInput: function (n) {
    if ('number' != typeof n) u.add(n);
  },
  unregisterInput: function (n) {
    if ('number' != typeof n) u.delete(n);
  },
  isTextInput: function (n) {
    return 'number' != typeof n && u.has(n);
  },
};
