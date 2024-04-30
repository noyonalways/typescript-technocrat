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
