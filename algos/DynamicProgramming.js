module.exports = class DynamicProgramming {
  fibonacciR(num) {
    if (num < 2) return num;
    return this.fibonacciR(num - 1) + this.fibonacciR(num - 2);
  }

  // Apply Dynamic Programming priniciple to cache intermittent results
  // To make cache globally available, use concept of closure as shown below
  fibonacciDy(num) {
    let cache = {};
    return function fib(num) {
      if (num in cache) {
        return cache[num];
      } else {
        if (num < 2) {
          return num;
        } else {
          cache[num] = fib(num - 1) + fib(num - 2);
          return cache[num];
        }
      }
    };
  }
};
