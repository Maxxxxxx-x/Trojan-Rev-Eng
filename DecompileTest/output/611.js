function t(t) {
  return true === require('./612')(t) && '[object Object]' === Object.prototype.toString.call(t);
}

module.exports = function (o) {
  var n, c;
  return false !== t(o) && 'function' == typeof (n = o.constructor) && false !== t((c = n.prototype)) && false !== c.hasOwnProperty('isPrototypeOf');
};
