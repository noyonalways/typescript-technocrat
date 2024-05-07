// 14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

function performOperations(
  param1: string | number,
  param2: boolean | string[]
): void {
  // Check the type of param1
  if (typeof param1 === "string") {
    console.log("Parameter 1 is a string:", param1.toUpperCase());
  } else if (typeof param1 === "number") {
    console.log("Parameter 1 is a number:", param1 * 2);
  }

  // Check the type of param2
  if (typeof param2 === "boolean") {
    console.log("Parameter 2 is a boolean:", param2 ? "true" : "false");
  } else if (Array.isArray(param2)) {
    console.log("Parameter 2 is an array of strings:", param2.join(", "));
  }
}

// Example usage
performOperations("hello", true);
performOperations(5, ["apple", "banana", "cherry"]);
performOperations(3.14, false);
