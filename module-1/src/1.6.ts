// Learning Functions
/**
 * Functions types
 * - Normal Function
 * - Arrow Function
 */

// normal function
function add(number1: number, number2: number): number {
  return number1 + number2;
}

// add(3, "5"); // Argument of type 'string' is not assignable to parameter of type 'number'.
add(3, 5);

// arrow function
const addByArrow = (num1: number, num2: number): number => num1 + num2;
addByArrow(3, 5);

// object --> function --> method
const poorUser = {
  name: "Noyon",
  balance: 0,
  addBalance(newBalance: number): number {
    return this.balance + newBalance;
  },
};

// callback function
const arr: number[] = [1, 2, 3, 4, 5];
const newArray: number[] = arr.map((num: number): number => num * num);
