var module22 = require('@babel/runtime/helpers/interopRequireDefault')(require('./22')),
  n = {
    __constants: null,
    OS: 'ios',

    get Version() {
      return this.constants.osVersion;
    },

    get constants() {
      if (null == this.__constants) this.__constants = module22.default.getConstants();
      return this.__constants;
    },

    get isPad() {
      return 'pad' === this.constants.interfaceIdiom;
    },

    get isTVOS() {
      return n.isTV;
    },

    get isTV() {
      return 'tv' === this.constants.interfaceIdiom;
    },

    get isTesting() {
      return false;
    },

    select: function (t) {
      return 'ios' in t ? t.ios : 'native' in t ? t.native : t.default;
    },
  };

module.exports = n;
