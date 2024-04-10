/*
Statement: 

Sort an array in ascending order without using inbuilt method.


*/

function sortAscending(array) {
  return array.sort((a, b) => a - b);
}

const array = [45, 2, 5, 10, 11, 0];
console.log(sortAscending(array));
