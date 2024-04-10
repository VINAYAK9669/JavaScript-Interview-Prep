function fibonacci(number) {
  if (number < 2) {
    return number;
  }
  return fibonacci(number - 1) + (number - 2);
}
console.log(fibonacci(5));
// TC - O(2^n)
