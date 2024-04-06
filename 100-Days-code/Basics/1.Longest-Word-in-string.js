/*

* *Statement: Longest Word in string

Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are mulitple longest words, return the first one.

*Constraints:
1]  Input may contain alphabetic characters, digits, spaces, and punctuation.
2]  Input string is no-empty
3]  Input string may contain multiple words seperated by spaces.

*Note:
1] If the input string is empty or contains white spaces , the functoin should return an false.
2] The function Should ignore leading and trailing whitespaces when determining the longest word.

*/

// Create a function
function findLongestWord(str) {
  // check the length of the string after removing whitespaces
  //   **************Method 1 ********************
  /* if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  return words.at(0);
  */
  //   **************Method 2 ********************
  words = str.split(" ");
  const result = words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
  return result;
}
console.log(
  findLongestWord("JavaScript is very important for web development")
);
