// Type Assertion / Type Narrowing

let anything: any;

anything = "Next Level Web Development";
(anything as string).trim(); // anything as string
console.log(anything);

anything = 222;
(anything as number).toFixed(2); // anything as number
console.log(anything);

const kilogramToGrams = (
  value: string | number
): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `The converted value is: ${convertedValue}`;
  } else if (typeof value === "number") {
    return value * 1000;
  }
};

const result1 = kilogramToGrams(100) as number;
const result2 = kilogramToGrams("100") as string;

// we need to be very careful when we use type assertion

console.log(result1);
console.log(result2);

// type assertion in customError in try catch block
type CustomError = {
  message: string;
};

try {
  // do something...
} catch (err) {
  console.log((err as CustomError).message);
}
