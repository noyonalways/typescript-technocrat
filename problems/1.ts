// 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function calculateSum(numbers: number[]): number {
  let sum: number = 0;
  if (numbers.length > 0) {
    for (let index = 0; index < numbers.length; index++) {
      sum = sum + numbers[index];
    }
    return sum;
  }
  return sum;
}

const numbers: number[] = [1, 2, 3, 4];
const sum: number = calculateSum(numbers);
console.log("sum:", sum);
