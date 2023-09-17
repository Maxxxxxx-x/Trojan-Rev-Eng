module.exports = function (t) {
  if ('string' != typeof t) throw new TypeError('Expected a string');
  return t.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
};
