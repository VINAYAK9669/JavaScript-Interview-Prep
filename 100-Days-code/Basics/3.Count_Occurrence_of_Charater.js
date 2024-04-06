/*
TASK: Write a function called countChar that takes two prameters: a string and a character to count. The function should return the number  of times the specified character  appears in the string.

constraints:
* function should be case sensitive
* function should handle both lowercase and uppercase
* the character parameters can be any printable ascii charcter
 */

function countChar(str, char) {
  const strArray = str.split("");
  const result = strArray.reduce((accum, curCharacter) => {
    if (curCharacter === char) {
      accum = accum + 1;
    }
    return accum;
  }, 0);
  return result;
}
console.log(countChar("Vinayak", "a")); // 2
console.log(countChar("MissIssippi", "I")); //1
