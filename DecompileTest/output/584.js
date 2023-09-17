exports.__esModule = true;

exports.createInvalidArgFactory = function (n, o) {
  return function (t, c) {
    throw new Error('Invalid value of type ' + typeof n + ' for ' + o + ' argument when connecting component ' + c.wrappedComponentName + '.');
  };
};
