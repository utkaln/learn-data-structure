module.exports = class Recursion {
  constructor() {
    this.answerValue = 1;
  }
  factorial(num) {
    if (num === 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }
    return num * this.factorial(num - 1);
  }

  fibonacci(nthTerm) {
    if (nthTerm < 2) {
      return nthTerm;
    }
    return this.fibonacci(nthTerm - 1) + this.fibonacci(nthTerm - 2);
  }
};
