/*
 Give an integer positive 'n', find the factorial of that number.

*/
function factorial(n) {
  let factorialValue = 1;
  if (n == 0) {
    return factorialValue;
  } else {
    for (let i = 1; i <= n; i++) {
      factorialValue = factorialValue * i;
    }
  }
  return factorialValue;
}

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(10));
