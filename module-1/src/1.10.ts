/**
 * Union And Intersection Types
 * - union type |
 * - intersection type  --> common properties
 *  */

// type FrontendDeveloper = "fakibuzDeveloper" | "juniorDeveloper";
// type FullStackDeveloper = "frontendDeveloper" | "fullstackDeveloper";
// type Developer = FrontendDeveloper | FullStackDeveloper;

// const newDeveloper: FrontendDeveloper = "juniorDeveloper";

// type User = {
//   name: string;
//   email?: string;
//   gender: "male" | "female";
//   bloodGroup: "A+" | "AB+" | "B+" | "O+" | "O-";
// };

// const newUser: User = {
//   name: "Noyon",
//   gender: "male",
//   bloodGroup: "A+",
// };

// Intersection type
type FrontendDeveloper = {
  skills: string[];
  designation1: "Front-end Developer";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "Back-end Developer";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullStackDeveloper = {
  skills: ["JavaScript", "ReactJS", "ExpressJS"],
  designation1: "Front-end Developer",
  designation2: "Back-end Developer",
};
