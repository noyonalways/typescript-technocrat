// Ternary, Optional Chaining & Nullish Coalescing Operator
const age: number = 18;

if (age >= 18) {
  console.log("adult");
} else {
  console.log("not adult");
}

// ternary operator
const isAdult: string = age >= 18 ? "adult" : "not adult";
console.log(isAdult);

// nullish coalescing operator
// null / undefined -> when we make decision based on this
const isAuthenticated = null;
const result1 = isAuthenticated ?? "Guest"; // only work in null / undefined
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1, result2 });

// optional chaining operator
type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presetAddress: string;
    permanentAddress?: string;
  };
};

const user3: User = {
  name: "Noyon",
  address: {
    city: "Gazipur",
    road: "Awesome Road",
    presetAddress: "Gazipur City",
  },
};

const permanentAddress: string =
  user3?.address?.permanentAddress ?? "No Permanent Address";
console.log({ permanentAddress });
