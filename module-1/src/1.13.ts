// What’s the difference between never and void in TypeScript?
const format = (value: string | number) => {
  if (typeof value === "string") {
    return value.substring(-2);
  } else if (typeof value === "number") {
    return value.toLocaleString();
  } else {
    console.log(value); // inferred value as 'never'
  }
};

console.log(format("Hello"));
