var t = {
  register: function (module31) {
    if (globals.RN$Bridgeless)
      globals.RN$registerCallableModule('RCTEventEmitter', function () {
        return module31;
      });
    else require('./31').registerCallableModule('RCTEventEmitter', module31);
  },
};
module.exports = t;
