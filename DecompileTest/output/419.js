var t = (function () {
  function t(t, n) {
    this.locationListenerCount = 0;
    this.headingListenerCount = 0;
    this.significantLocationListenerCount = 0;
    this.nativeInterface = t;
    this.eventEmitter = n;
  }

  t.prototype.subscribeToLocationUpdates = function (t) {
    var n = this,
      o = this.eventEmitter.addListener('locationUpdated', t);
    this.nativeInterface.startUpdatingLocation();
    this.locationListenerCount += 1;
    return function () {
      o.remove();
      n.locationListenerCount -= 1;
      if (0 === n.locationListenerCount) n.nativeInterface.stopUpdatingLocation();
    };
  };

  t.prototype.subscribeToHeadingUpdates = function (t) {
    var n = this,
      o = this.eventEmitter.addListener('headingUpdated', t);
    this.nativeInterface.startUpdatingHeading();
    this.headingListenerCount += 1;
    return function () {
      o.remove();
      n.headingListenerCount -= 1;
      if (0 === n.headingListenerCount) n.nativeInterface.stopUpdatingHeading();
    };
  };

  t.prototype.subscribeToSignificantLocationUpdates = function (t) {
    var n = this,
      o = this.eventEmitter.addListener('locationUpdated', t);
    this.nativeInterface.startMonitoringSignificantLocationChanges();
    this.significantLocationListenerCount += 1;
    return function () {
      o.remove();
      n.significantLocationListenerCount -= 1;
      if (0 === n.significantLocationListenerCount) n.nativeInterface.stopMonitoringSignificantLocationChanges();
    };
  };

  return t;
})();

exports.default = t;
