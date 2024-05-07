// 13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

function getFirstElement<T extends number | string>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

console.log(getFirstElement(["mango", "banana", "apple"]));
console.log(getFirstElement([33, 44, 55]));
console.log(getFirstElement([])); // output: undefined
