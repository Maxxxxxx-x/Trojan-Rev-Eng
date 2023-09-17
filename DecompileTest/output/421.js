exports.promiseTimeoutResolveNull = function (o, t) {
  var u = new Promise(function (t) {
    var u = setTimeout(function () {
      clearTimeout(u);
      t(null);
    }, o);
  });
  return Promise.race([t, u]);
};
