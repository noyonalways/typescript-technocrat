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
const [firstFriend, secondFriend, ...restFriends] = friends; // we can also use rest operator in array destructuring
console.log(firstFriend);
console.log(secondFriend);
