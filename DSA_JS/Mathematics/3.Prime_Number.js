function isPrime(number) {
  if (number === 2 || number === 3) {
    return true;
  } else if (number % 2 == 0 || number % 3 == 0 || number < 2) {
    return false;
  } else {
    for (let i = 5; i <= Math.sqrt(number); i += 6) {
      if ((number % i === 0 || number % (i + 2) === 0) && number !== i) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); //  true
console.log(isPrime(4)); // false
console.log(isPrime(1)); // false
console.log(isPrime(0)); // false
console.log(isPrime(2)); // true

// TC: O(sqrt(n))
