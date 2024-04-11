/*
Problem Statement: Check the given sequence is palindrome or not

Note: Remove any special character except underscore, it should be incasesensitive, remove spaces, comma.

*/

function isPalindrome(str) {
  // make a lowercase letter
  str = str.toLowerCase();
  // remove any non-word character using regexp
  str = str.replace(/\W/g, "");
  // split the string into each individual character
  compStr = str.split("");
  //   now reverese each character
  compStr = compStr.reverse();
  //   Now join each charater
  compStr = compStr.join("");

  return compStr === str;
}
console.log(isPalindrome("A man, a plan, a canal, panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
