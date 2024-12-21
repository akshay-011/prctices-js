// Write a function memoize(fn) that takes a function as an argument and returns a new function with memoization
// The memoized function should cache the result of previous function calls for faster execution.

// Example:
// const fastFib = memoize(fib) where fib(n) calculates the nth Fibonacci number.

function memoize(fn) {
  let lastResult = 0;

  return function (...inputs) {
    lastResult = fn(...inputs);

    return lastResult;
  };
}