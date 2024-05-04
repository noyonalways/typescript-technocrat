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
