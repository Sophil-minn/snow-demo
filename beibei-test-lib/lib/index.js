module.exports = {
  sum(a, b) {
    return a + b;
  },
  init({ option, param }) {
    console.log('执行init流程 10-30', option, param);
  }
}