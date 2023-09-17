Object.defineProperty(exports, 'connect', {
  enumerable: true,
  get: function () {
    return require('./559').connect;
  },
});

exports.default = function (n) {
  var module593 = require('./593').create(n);

  if (!globals.registered)
    n.models.forEach(function (t) {
      return module593.model(t);
    });
  globals.registered = true;
  module593.start();
  var u = module593._store;

  module593.start = function (n) {
    return function () {
      return module125.default.createElement(
        require('./559').Provider,
        {
          store: u,
        },
        n
      );
    };
  };

  module593.getStore = function () {
    return u;
  };

  return module593;
};

var module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125'));
