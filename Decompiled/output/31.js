var module32 = new (require('./32'))();
Object.defineProperty(globals, '__fbBatchedBridge', {
  configurable: true,
  value: module32,
});
module.exports = module32;
