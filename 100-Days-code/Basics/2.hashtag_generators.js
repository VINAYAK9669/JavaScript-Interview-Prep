/*
*STATEMENT: 
Problem: Hash Tag Generators

*Example: 
1]
input: "my name is Vinayak"
o/p: #myNameIsVinayak

2] 
input:"" 
o/p: false

constraints:
the length should not exceed 280Characters
should not contain ONLY white spaces/ EMPTY
if they contains both the above then return false
*/

function generateHashTags(str) {
  // remove the whitespaces
  if (str.trim().length === 0 || str.trim() > 280) {
    return false;
  }
  const strArray = str.trim().split(" ");
  // ******* Method-1 ********************
  // const result = strArray.reduce(
  //   (accm, currWord) =>
  //     (accm += currWord[0].toUpperCase() + currWord.substring(1)), //1 method,
  //   // (accm += currWord.replace(currWord[0], currWord[0].toUpperCase())),
  //   ""
  // );
  // return `#${result}`;
  //*************************** */

  // ******* Method-2********************
  const result = strArray.map(
    (curWord) =>
      // curWord.replace(curWord[0], curWord[0].toUpperCase())
      // curWord.charAt(0).toUpperCase() + curWord.slice(1)
      curWord[0].toUpperCase() + curWord.substring(1)
  );
  console.log(result);
  return `#${result.join("")}`;
  // ***************************
}
console.log(generateHashTags("I am vinayak kittad"));
