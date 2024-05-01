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

const friendsList1 = ["Nadim", "Shakil", "Asif"];
greetFriends2(...friendsList1);
