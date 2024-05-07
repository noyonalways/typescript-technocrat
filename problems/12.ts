// 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function processInput(input: unknown): void {
  if (typeof input === "string") {
    console.log(`You have been passed a ${input} string`);
  } else if (typeof input === "number") {
    console.log(`Hey! Wanna some operations with this ${input}`);
  } else {
    console.log("Unknown input type");
  }
}

processInput("hello world");
processInput(52);
