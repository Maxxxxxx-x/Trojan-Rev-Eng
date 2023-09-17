module.exports = function (n, t) {
  return function (...args) {
    return n.apply(t, args);
  };
};
