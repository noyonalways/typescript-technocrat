// Interface, Type Vs Interface

// using the type aliases
type User1 = {
  name: string;
  age: number;
};

type UserWithRole1 = User1 & { role: string }; // intersection

const user1: UserWithRole1 = {
  name: "Noyon",
  age: 21,
  role: "admin",
};

// using the interfaces
interface User2 {
  name: string;
  age: number;
}
interface UserWithRole2 extends User2 {
  // UserWithRole2 is extends with interface User2
  role: string;
}

interface UserWithRole3 extends User1 {
  role: string;
  // we can also extends interface with type alias
}

const user2: UserWithRole2 = {
  name: "Rahman",
  age: 21,
  role: "admin",
};

const user3: UserWithRole3 = {
  name: "Noyon",
  age: 21,
  role: "admin",
};

// js --> object , array --> object function --> object

// array
// using type alias
type Rolls1 = number[];
const rollNumbers1: Rolls1 = [1, 2, 3];

// using interface
interface Rolls2 {
  [index: number]: number;
}
const rollNumbers2: Rolls2 = [1, 2, 3];

// function
// using type alias
type Add1 = (num1: number, num2: number) => number;
const add1: Add1 = (num1: number, num2: number) => num1 + num2;

// using interface
interface Add2 {
  (num1: number, num2: number): number;
}
const add2: Add2 = (num1: number, num2: number) => num1 + num2;
