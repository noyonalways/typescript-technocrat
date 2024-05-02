// Type Assertion / Type Narrowing

let anything: any;

anything = "Next Level Web Development";
(anything as string).trim(); // anything as string
console.log(anything);

anything = 222;
(anything as number).toFixed(2); // anything as number
console.log(anything);

const kilogramToGrams = (value: string | number) => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value);
    return `The converted value is: ${convertedValue}`;
  } else if (typeof value === "number") {
    return value * 1000;
  }
};
