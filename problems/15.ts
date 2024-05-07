// 15. Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

function filterArray<T>(arr: T[], callback: (value: T) => boolean): T[] {
  const filteredArray: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const names = ["Alice", "Bob", "Charlie", "Dave"];
const longNames = filterArray(names, (name) => name.length > 4);
console.log(longNames); // Output: ['Alice', 'Charlie']
