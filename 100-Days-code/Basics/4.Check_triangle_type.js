/*

Task- Write a fnuction called checkTriangleType that takes three paramaters representing the lengths of the sides of a triangle. the function should return a string infdicating the type of triangle : "equilateral", "isosceles", "scalene"

constraints: also need to check whether the triangle forms or not
*/
function checkTriangleType(a, b, c) {
  const isTriangleForms = a + b >= c && a + c >= b && b + c >= a;
  if (isTriangleForms) {
    const isEquilateral = a == b && b === c;
    const isIsoscalene = a === b || b === c || a === c;

    if (isEquilateral) {
      return "The type is Equilateral";
    } else if (isIsoscalene) {
      return "The type is Isoscalene";
    } else {
      return "The type is Scalene";
    }
  } else {
    return "Does not form a triangle";
  }
}

console.log(checkTriangleType(3, 3, 3)); // The type is Equilateral
console.log(checkTriangleType(3, 4, 3)); // The type is Isoscalene
console.log(checkTriangleType(5, 8, 6)); // The type is Scalene
console.log(checkTriangleType(5, 8, 0)); // Does not form a triangle
