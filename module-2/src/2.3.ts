// 2-3: Introduction To Generics
// normal way
const rollNumbs1: number[] = [3, 6, 9];
const rollNumbs2: Array<number> = [3, 6, 9];

const mentors1: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const mentors2: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const boolArray1: boolean[] = [true, false, true];
const boolArray2: Array<boolean> = [true, false, true];

// use generics
// type GenericArray<param> = Array<param>;
type GenericArray<T> = Array<T>;
// convention is use 'T' for dynamic type

const rollNumbs3: GenericArray<number> = [3, 6, 9];
const mentors3: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const boolArray3: GenericArray<boolean> = [true, false, true];

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
