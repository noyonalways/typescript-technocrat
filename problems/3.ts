// 3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

function calculateArea(length: number = 1, width: number = 1): number {
  return length * width;
}

const areaResult: number = calculateArea(10, 5);
console.log("ares:", areaResult);
