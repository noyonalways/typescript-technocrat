// 3-3: Type Guard Using Typeof & In

// typeof --> type guard
type Alphanumeric = number | string;

const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};

const result1 = add(33, 17);
const result2 = add("33", 17);
console.log(result1);
console.log(result2);

// in guard
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};

const normalUser: NormalUser = {
  name: "Mr. Normal Bhai",
};

const adminUser: AdminUser = {
  name: "Mr. Admin Bhai",
  role: "admin",
};

getUser(normalUser);
getUser(adminUser);
