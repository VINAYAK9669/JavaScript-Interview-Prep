/*
*Problem Statement:
Give a number 'n', find the 'n' elements of the fibonacci.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

*Test Cases:

Input: 5
Output: [0, 1, 1, 2, 3]

Input: 8
Output: [0, 1, 1, 2, 3, 5, 8, 13]

Input: 0
Output: [] (Empty sequence)

Input: 1
Output: [0]

*/

function fibonacci(n) {
  const fib = [0, 1];
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return fib[0];
  } else if (n === 2) {
    return fib;
  } else {
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  return fib;
}

console.log(fibonacci(5));
console.log(fibonacci(8));
