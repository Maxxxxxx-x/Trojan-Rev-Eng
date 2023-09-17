var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  s = (function () {
    function s(n, l) {
      module7.default(this, s);
      this.type = n;
      this.bubbles = !(null == l || !l.bubbles);
      this.cancelable = !(null == l || !l.cancelable);
      this.composed = !(null == l || !l.composed);
      this.scoped = !(null == l || !l.scoped);
      this.isTrusted = false;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.NONE = 0;
      this.AT_TARGET = 1;
      this.BUBBLING_PHASE = 2;
      this.CAPTURING_PHASE = 3;
      this.eventPhase = this.NONE;
      this.currentTarget = null;
      this.target = null;
      this.srcElement = null;
    }

    module8.default(s, [
      {
        key: 'composedPath',
        value: function () {
          throw new Error('TODO: not yet implemented');
        },
      },
      {
        key: 'preventDefault',
        value: function () {
          this.defaultPrevented = true;
          if (null != this._syntheticEvent) this._syntheticEvent.preventDefault();
        },
      },
      {
        key: 'initEvent',
        value: function (t, n, s) {
          throw new Error('TODO: not yet implemented. This method is also deprecated.');
        },
      },
      {
        key: 'stopImmediatePropagation',
        value: function () {
          throw new Error('TODO: not yet implemented');
        },
      },
      {
        key: 'stopPropagation',
        value: function () {
          if (null != this._syntheticEvent) this._syntheticEvent.stopPropagation();
        },
      },
      {
        key: 'setSyntheticEvent',
        value: function (t) {
          this._syntheticEvent = t;
        },
      },
    ]);
    return s;
  })();

globals.Event = s;
var l = s;
exports.default = l;
