exports.default = function (o) {
  return function () {
    if (undefined !== arguments[0])
      throw new Error(
        "Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API? See https://reactnavigation.org/docs/hello-react-navigation for the latest API and guides."
      );
    return {
      Navigator: o,
      Group: module496.default,
      Screen: module497.default,
    };
  };
};

var module496 = require('@babel/runtime/helpers/interopRequireDefault')(require('./496')),
  module497 = require('@babel/runtime/helpers/interopRequireDefault')(require('./497'));
