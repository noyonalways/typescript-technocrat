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
