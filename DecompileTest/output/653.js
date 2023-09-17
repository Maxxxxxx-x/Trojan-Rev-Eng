module.exports = function (t) {
  var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return n ? n[1] : '';
};
