// 11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

let initialValue: string | null = null;
initialValue = "my-string" as string;

console.log(initialValue.length);
