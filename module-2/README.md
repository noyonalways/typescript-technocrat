<h1 align='center'>Explore Advance Types of TypeScript</h1>

## Topics

1. Type assertion / type narrowing
2. Interface, type vs interface
3. Introduction to generics
4. Generic with Interface
5. Function with generics
6. Constraints in typescript
7. Constraint using key of
8. Asynchronous typescript
9. Conditional types
10. Mapped types
11. Utility types

## Table of Contents

- [Type assertion / type narrowing](#type-assertion--type-narrowing)
- [Interface, type vs interface](#interface-type-vs-interface)
  - [Type:](#type)
  - [Interface:](#interface)
  - [Non-Primitive data](#non-primitive-data)
  - [Which One to Use?](#which-one-to-use)
  - [Is it possible to use interface directly in primitive data type?](#is-it-possible-to-use-interface-directly-in-primitive-data-type)
- [Introduction to generics](#introduction-to-generics)
  - [Normal way](#normal-way)
  - [Use Generics](#use-generics)
  - [Generics tuple](#generics-tuple)
- [Generic with Interface](#generic-with-interface)
  - [Using Type alias](#using-type-alias)
  - [Using interface](#using-interface)
- [Function with generics](#function-with-generics)
- [Constraints in typescript](#constraints-in-typescript)
- [Constraint using keyof operator](#constraint-using-keyof-operator)
- [Asynchronous typescript](#asynchronous-typescript)
- [Conditional types](#conditional-types)
- [Mapped types](#mapped-types)
- [Utility types](#utility-types)

# Type assertion / type narrowing

```tsx
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
```

```tsx
// type assertion in customError in try catch block
type CustomError = {
  message: string;
};

try {
  // do something...
} catch (err) {
  console.log((err as CustomError).message);
}
```

# Interface, type vs interface

In TypeScript, both types and interfaces serve a similar purpose: they allow you to define the shape of data. However, there are some differences between them.

### Type:

A type in TypeScript is like a label that you can apply to any value. It allows you to define custom types that can be used throughout your code. Types are very flexible and can represent a wide range of data structures, including primitive types like numbers and strings, as well as more complex structures like objects and arrays.

```tsx
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
```

### Interface:

An interface, on the other hand, is a way to define the shape of an object. It allows you to specify the properties and their types that an object must have. Interfaces are often used to enforce a contract between different parts of your code, ensuring that objects have the correct structure.

```tsx
// Interface, Type Vs Interfac

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
```

### Non-Primitive data

```tsx
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
```

### Which One to Use?

Both types and interfaces have their strengths, and the choice between them often comes down to personal preference and specific use cases. However, there are some guidelines:

- Use interfaces when you're defining the shape of objects or classes, especially if you intend for those shapes to be implemented by multiple classes or objects.
- Use types when you need to define more complex data structures, like unions or intersections, or when you want to create aliases for existing types.

In general, TypeScript's type system is quite flexible, so feel free to experiment with both types and interfaces to see which works best for your project!

### Is it possible to use interface directly in primitive data type?

In TypeScript, interfaces are primarily used to describe the shape of objects, rather than primitive data types like `string`, `number`, or `boolean`. However, you can indirectly use interfaces with primitive data types by defining them within an object.

For example:

```tsx
interface MyStringInterface {
  value: string;
}

const myString: MyStringInterface = {
  value: "Hello, World!",
};
```

Here, `MyStringInterface` is an interface that describes an object with a property `value` of type `string`. While the interface itself is not directly applied to a primitive type, it's used to structure an object that contains primitive data.

This approach allows you to maintain consistency in your codebase by using interfaces to define the structure of both primitive and non-primitive data within objects. However, it's worth noting that using interfaces in this way for primitive types might not always be necessary or beneficial, especially if the data structure is simple and doesn't require additional properties. In such cases, using type aliases (`type`) might be more appropriate.

# Introduction to generics

Generics in TypeScript are like placeholders for types. They allow you to create functions, classes, and interfaces that can work with any type, rather than a specific one. It's like having a flexible blueprint that you can use with different types of data.

### Normal way

```tsx
// 2-3: Introduction To Generics
// normal way
const rollNumbs1: number[] = [3, 6, 9];
const rollNumbs2: Array<number> = [3, 6, 9];

const mentors1: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const mentors2: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const boolArray1: boolean[] = [true, false, true];
const boolArray2: Array<boolean> = [true, false, true];
```

### Use Generics

```tsx
// use generics
// type GenericArray<param> = Array<param>;
type GenericArray<T> = Array<T>;
// convention is use 'T' for dynamic type

const rollNumbs3: GenericArray<number> = [3, 6, 9];
const mentors3: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const boolArray3: GenericArray<boolean> = [true, false, true];
```

```tsx
// use generics to create a array of objects
interface User {
  name: string;
  age: number;
}
type UserType = {
  name: string;
  age: number;
};

// we can also pass interface and type aliases to define the shape of the object

const users: GenericArray<{ name: string; age: number }> = [
  {
    name: "Noyon Rahman",
    age: 21,
  },
  {
    name: "Shakil Ahmed",
    age: 20,
  },
];
```

### Generics tuple

```tsx
// generics tuple
type GenericTuple<X, Y> = [X, Y];

// normal way
const human1: [string, string] = ["Mr. X", "Mr. Y"];

// generics way
const human2: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

// another example
const userWithId: [number, { name: string; email: string }] = [
  123,
  { name: "Mr. Example", email: "example@example.com" },
];
```

# Generic with Interface

### Using Type alias

```tsx
// 2-4: Generic With Interface

// using type alias
type GenericArray1<T> = Array<T>;

interface User {
  name: string;
  age: number;
}

const allUsers: GenericArray1<User> = [
  {
    name: "Noyon",
    age: 21,
  },
];
```

### Using interface

```tsx
// using interface
interface Developer<SMARTWATCH, BIKE = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: SMARTWATCH;
  bike?: BIKE;
}

type EmilabWatch = {
  brand: string;
  model: string;
  display: string;
};

const poorDeveloper: Developer<EmilabWatch> = {
  name: "Noyon",
  computer: {
    brand: "Gigabyte",
    model: "Gigabyte BM560",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Emilab",
    model: "kw66",
    display: "OLED",
  },
};

interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface YamahaBike {
  brand: string;
  cc: string;
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
  name: "John",
  computer: {
    brand: "HP",
    model: "X-25UR",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Apple",
    model: "Apple Something",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    brand: "Yamaha",
    cc: "150cc",
  },
};
```

# Function with generics

```tsx
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber = firstElement(numbers); // firstNumber is inferred as number

const strings: string[] = ["apple", "banana", "cherry"];
const firstString = firstElement(strings); // firstString is inferred as string
```

```tsx
// 2-5 Function With Generics
const createArray = (param: string): string[] => {
  return [param];
};
const res1 = createArray("Bangladesh");

// with generics
const createArrayWithGeneric = <T,>(param: T): T[] => {
  return [param];
};
const res2 = createArrayWithGeneric<string>("BD");

type UserInfo = {
  id: number;
  name: string;
};
const res3 = createArrayWithGeneric<UserInfo>({
  id: 123,
  name: "Mr. Dev",
});
```

```tsx
// create tuple with generics
const createTupleWithGenerics = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res4 = createTupleWithGenerics<string, number>("BD", 147570);
const res5 = createTupleWithGenerics<string, { name: string }>("BD", {
  name: "Asia",
});

const addCourseToStudent = <T,>(student: T) => {
  const course: string = "Next Level Web Development";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent<{
  name: string;
  email: string;
  devType: string;
}>({
  name: "Student 1",
  email: "student1@gmail.com",
  devType: "NLWD",
});

const student2 = addCourseToStudent<{
  name: string;
  email: string;
  smartWatch: string;
}>({
  name: "Student 2",
  email: "student2@gmail.com",
  smartWatch: "Apple Watch",
});

console.log(student2);
```

# Constraints in typescript

```tsx
// 2-6: Constraints In Typescript

// constraints -> force

interface Student {
  id: number;
  name: string;
  email: string;
}

const addCourseToStudent1 = <T extends Student>(student: T) => {
  const course: string = "Next Level Web Development";

  return {
    ...student,
    course,
  };
};

const student3 = addCourseToStudent1<{
  id: number;
  name: string;
  email: string;
  devType: string;
}>({
  id: 111,
  name: "Student 1",
  email: "student1@gmail.com",
  devType: "NLWD",
});

const student4 = addCourseToStudent1<{
  id: number;
  name: string;
  email: string;
  smartWatch: string;
}>({
  id: 222,
  name: "Student 2",
  email: "student2@gmail.com",
  smartWatch: "Apple Watch",
});

const student5 = addCourseToStudent1<Student>({
  id: 333,
  name: "Student 3",
  email: "student3@gmail.com",
});
```

# Constraint using keyof operator

```tsx
// 2-7 Constraint Using keyof operator

type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner1 = "bike" | "car" | "ship"; // manually
type Owner2 = keyof Vehicle;

const richPerson: Owner1 = "bike";

const getPropertyValue = <OBJECT, KEY extends keyof OBJECT>(
  obj: OBJECT,
  key: KEY
) => {
  return obj[key];
};

const user = {
  name: "Rahman",
  age: 21,
  gender: "Male",
  contactNo: "+8801700000000",
  address: "Bangladesh",
};

console.log(getPropertyValue(user, "contactNo"));
```

# Asynchronous typescript

```tsx
// 2-8: Asynchronous Typescript
// promise

// simulate
const createPromise1 = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something";
    if (data) {
      resolve(data);
    } else {
      reject("failed to load data");
    }
  });
};
```

```tsx
type Something = {
  something: string;
};

const createPromise2 = (): Promise<Something> => {
  return new Promise<Something>((resolve, reject) => {
    const data: Something = {
      something: "something",
    };
    if (data) {
      resolve(data);
    } else {
      reject("failed to load data");
    }
  });
};

// calling create promise function
const showData = async () => {
  const data = await createPromise2();
  // console.log(data);
  return data;
};

showData();
```

```tsx
// api call to json placeholder
type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
};

getTodo().then((data) => console.log(data));
```

# Conditional types

```tsx
// 2-9: Conditional Types

// case 1:
type a1 = number;
type b1 = string;
type x = a1 extends null ? true : false; // conditional type
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
// conditional type
```

```tsx
// case 2:
type Sheikh = {
  bike: string;
  car: string;
  ship: string;
};

// case ase kina / bike ase kina / ship ase kina / tractor ase kina
// keyof Sheikh => "bike" | "car" | "ship"

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false; // manually check
type CheckVehicle<T> = T extends keyof Sheikh ? true : false; // manually check

// type hasBike = CheckVehicle<"bike">; // manually check
type hasBike = CheckVehicle<Sheikh["ship"]>;
```

# Mapped types

```tsx
// 2-10: Mapped Types

// recap of map method
const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());
```

```tsx
type AreaNumber = {
  height: number;
  width: number;
};

// map manually
type AreaString1 = {
  height: string;
  width: string;
};
```

```tsx
type AreaNumber = {
  height: number;
  width: number;
};

// using map type
type AreaString2 = {
  [key in "height" | "width"]: string;
};

type AreaString3 = {
  [key in keyof AreaNumber]: string;
};

// loop up type
type Height = AreaNumber["height"];
//            type[key] => value

// fully dynamic mapped type
type AreaString4<T> = {
  [key in keyof T]: T[key];
};

const area4: AreaString4<{ height: number; width: number }> = {
  height: 44,
  width: 34,
};
```

# Utility types

```tsx
// 2-11 Utility Types

type Person = {
  name: string;
  age: number;
  gender: string;
  contactNo: string;
  email?: string;
};

// Pick
type Properties1 = Pick<Person, "name" | "age">; // manually
type Properties2 = Pick<Person, keyof Person>; // dynamically

// Omit
type ContactInfo = Omit<Person, "name" | "age" | "gender">;

// Required
type PersonRequired = Required<Person>;

// Partial
type PersonPartial = Partial<Person>;

// Readonly
type PersonReadonly = Readonly<Person>;
const person1: PersonReadonly = {
  name: "Noyon",
  age: 21,
  gender: "Male",
  contactNo: "+8801700000000",
  email: "noyon@example.com",
};

// person1.name = "";
// Cannot assign to 'name' because it is a read-only property.

// Record
type MyObj1 = {
  a: string;
  b: string;
}; // manually

type MyObj2 = Record<string, string>; // dynamically
type MyObj3 = Record<string, unknown>; // fully dynamically

const obj1: MyObj2 = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const obj2: MyObj3 = {
  name: "Next Dev",
  age: 21,
};
```
