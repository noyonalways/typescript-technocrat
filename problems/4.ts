// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

// method 1
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// method 2
function reverseArr<T>(arr: T[]): T[] {
  const newArray = new Array();
  for (let index = arr.length - 1; index >= 0; index--) {
    newArray.push(arr[index]);
    console.log(index);
  }
  return newArray;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["mango", "banana", "cherry"];

const reversedNumbers = reverseArray(numbers);
const reversedStrings = reverseArr(strings);

console.log("reversed", reversedNumbers);
console.log("reversed", reversedStrings);
