function isPowerTwo(number) {
  if (number === 1) {
    return true;
  }

  while (number > 0) {
    if (number % 2 !== 0) {
      return false;
    }
    number = number / 2;
  }
  return true;
}

console.log(isPowerTwo(120)); // false
console.log(isPowerTwo(32)); // true
console.log(isPowerTwo(1)); // true

// TC:  log(n) input size is reduced by half in each iteration
