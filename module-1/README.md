<h1>Explore Basic Types of Typescript</h1>

- [Basic data types](#basic-data-types)
  - [Primitive Types \& Non Primitive Types](#primitive-types--non-primitive-types)
    - [Primitive:](#primitive)
    - [Not Primitive types:](#not-primitive-types)
- [Object , Optional and Literal Types](#object--optional-and-literal-types)
- [Function in typescript](#function-in-typescript)
  - [Function Types](#function-types)
- [Spread and Rest Operator](#spread-and-rest-operator)
- [Destructuring In Typescript](#destructuring-in-typescript)
- [Type Alias In Typescript](#type-alias-in-typescript)

# Basic data types

## Primitive Types & Non Primitive Types

### Primitive:

- number
- string
- boolean
- null
- undefined
  - symbol

### Not Primitive types:

- Array
- Tuple
- Object

```tsx
// Basic Data Types

// string
let firstName: string = "noyon";

// number
let roll: number = 9;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

// any
let d: any; // If we use any that means we don't use the power of typescript.
// we need to avoid to use the 'any' type in TypeScript

// array
let friends: string[] = ["nadim", "shakil"];
// friends.push(3);
// Argument of type 'number' is not assignable to parameter of type 'string'.

let rollList: number[] = [23, 34];
// rollList.push("asif");
// Argument of type 'string' is not assignable to parameter of type 'number'.

// tuple --> array --> order --> type of values
let coordinates: [number, number] = [1, 5];

let ageName: [number, string, boolean] = [50, "Mr.X", true];
ageName[0] = 55;
```

# Object , Optional and Literal Types

```tsx
// Reference Type --> Object

const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  // company: "Programming Hero";
  // type -> literal type. we can also specify it by readonly
  readonly company: string;
} = {
  firstName: "Noyon",
  middleName: "",
  lastName: "Rahman",
  isMarried: false,
  company: "Programming Hero",
};

user.company = "ph";
// Cannot assign to 'company' because it is a read-only property.
```

# Function in typescript

### Function Types

- Normal Function
- Arrow Function

```tsx
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

add(3, "5");
// Argument of type 'string' is not assignable to parameter of type 'number'.
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
```

# Spread and Rest Operator

```tsx
//  Spread and Rest Operator

// spread operator
const bros1: string[] = ["nadim", "shakil", "asif"];
const bros2: string[] = ["mahfuj", "asraf", "sabit"];

bros1.push(...bros2);

// const allBros: string[] = [...bros, ...bros2];

const mentors1 = {
  typescript: "Mezba",
  redux: "Mir",
  dbms: "Mizan",
};

const mentors2 = {
  prisma: "Firoz",
  next: "Tanmoy",
  cloud: "Nahid",
};

const allMentors = {
  ...mentors1,
  mentors2,
};

// rest operator

// without rest operator
const greetFriends1 = (friend1: string, friend2: string, friend3: string) => {
  console.log(`Hi ${friend1}`);
  console.log(`Hi ${friend2}`);
  console.log(`Hi ${friend3}`);
};

greetFriends1("Nadim", "Shakil", "Asif");

// with rest operator
const greetFriends2 = (...friends: string[]) => {
  friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
  });
};
```

# Destructuring In Typescript

```tsx
// Destructuring In Typescript
const user1 = {
  id: 125,
  name: {
    firstName: "Noyon",
    middleName: "",
    lastName: "Rahman",
  },
  contactNo: "+8801700000000",
  address: "Bangladesh",
};

// object destructuring
const {
  contactNo,
  name: { firstName: fName, middleName, lastName },
  // name aliases
} = user1;

// array destructuring
const friendsList = ["nadim", "shakil", "asif", "mahfuj"];
const [firstFriend, secondFriend, ...restFriends] = friends;
// we can also use rest operator in array destructuring
console.log(firstFriend);
console.log(secondFriend);
```

# Type Alias In Typescript

```tsx
// Type Alias In Typescript

type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};

const student1: Student = {
  name: "Noyon",
  age: 21,
  gender: "Male",
  contactNo: "+8801700000000",
  address: "Bangladesh",
};

const student2: Student = {
  name: "Nadim",
  age: 20,
  gender: "Male",
  address: "Bangladesh",
};

type Username = string;
type IsAdmin = boolean;
const userName: Username = "Noyon";
const admin: IsAdmin = true;

// type aliases for functions
type AddFunc = (num1: number, num2: number) => number;
const addFun: AddFunc = (num1, num2) => num1 + num2;
```
