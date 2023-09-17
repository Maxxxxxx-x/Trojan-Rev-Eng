module.exports = {
  get BatchedBridge() {
    return require('./31');
  },

  get ExceptionsManager() {
    return require('./52');
  },

  get Platform() {
    return require('./21');
  },

  get RCTEventEmitter() {
    return require('./127');
  },

  get ReactNativeViewConfigRegistry() {
    return require('./128');
  },

  get TextInputState() {
    return require('./129');
  },

  get UIManager() {
    return require('./141');
  },

  get deepDiffer() {
    return require('./168');
  },

  get deepFreezeAndThrowOnMutationInDev() {
    return require('./169');
  },

  get flattenStyle() {
    return require('./170');
  },

  get ReactFiberErrorDialog() {
    return require('./171').default;
  },

  get legacySendAccessibilityEvent() {
    return require('./43');
  },

  get RawEventEmitter() {
    return require('./172').default;
  },

  get CustomEvent() {
    return require('./173').default;
  },
};
