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
// friends.push(3); // Argument of type 'number' is not assignable to parameter of type 'string'.

let rollList: number[] = [23, 34];
// rollList.push("asif"); // Argument of type 'string' is not assignable to parameter of type 'number'.

// tuple --> array --> order --> type of values
let coordinates: [number, number] = [1, 5];

let ageName: [number, string, boolean] = [50, "Mr.X", true];
ageName[0] = 55;
