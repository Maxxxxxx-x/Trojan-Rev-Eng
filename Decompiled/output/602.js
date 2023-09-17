exports.__esModule = true;

var module603 = require('./603'),
  module605 = require('./605'),
  module606 = require('./606');

var u = function (t) {
    return (
      'import { ' +
      t +
      " } from 'redux-saga' has been deprecated in favor of import { " +
      t +
      " } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield " +
      t +
      ' will return task descriptor to your saga and execute next lines of code.'
    );
  },
  module597 = require('./597').deprecate(module603.default, u('takeEvery')),
  module597 = require('./597').deprecate(module605.default, u('takeLatest')),
  module597 = require('./597').deprecate(module606.default, u('throttle'));

exports.takeEvery = module597;
exports.takeLatest = module597;
exports.throttle = module597;
exports.takeEveryHelper = module603.default;
exports.takeLatestHelper = module605.default;
exports.throttleHelper = module606.default;
