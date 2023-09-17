function e(e) {
  if (!e) return null;
  var n = new Error(e.message);
  n.key = e.key;
  return n;
}

function n(e) {
  if (Array.isArray(e)) return 0 === e.length ? null : e;
  else return e ? [e] : null;
}

exports.checkValidArgs = function (e, n) {
  if (!Array.isArray(e) || 0 === e.length || !Array.isArray(e[0])) throw new Error('[AsyncStorage] Expected array of key-value pairs as first argument to multiSet');

  if (n && 'function' != typeof n) {
    if (Array.isArray(n))
      throw new Error('[AsyncStorage] Expected function as second argument to multiSet. Did you forget to wrap key-value pairs in an array for the first argument?');
    throw new Error('[AsyncStorage] Expected function as second argument to multiSet');
  }
};

exports.checkValidInput = function (...args) {
  var o = args[0],
    s = args[1];
  if ('string' != typeof o)
    console.warn('[AsyncStorage] Using ' + typeof o + ' type for key is not supported. This can lead to unexpected behavior/errors. Use string instead.\nKey passed: ' + o + '\n');

  if (args.length > 1 && 'string' != typeof s) {
    if (null == s)
      throw new Error(
        '[AsyncStorage] Passing null/undefined as value is not supported. If you want to remove value, Use .removeItem method instead.\nPassed value: ' +
          s +
          '\nPassed key: ' +
          o +
          '\n'
      );
    console.warn(
      '[AsyncStorage] The value for key "' +
        o +
        '" is not a string. This can lead to unexpected behavior/errors. Consider stringifying it.\nPassed value: ' +
        s +
        '\nPassed key: ' +
        o +
        '\n'
    );
  }
};

exports.convertError = e;

exports.convertErrors = function (t) {
  var o = n(t);
  return o
    ? o.map(function (n) {
        return e(n);
      })
    : null;
};
