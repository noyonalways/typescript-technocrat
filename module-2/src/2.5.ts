// 2-5 Function With Generics

/* function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber = firstElement(numbers); // firstNumber is inferred as number

const strings: string[] = ["apple", "banana", "cherry"];
const firstString = firstElement(strings); // firstString is inferred as string */

const createArray = (param: string): string[] => {
  return [param];
};
const res1 = createArray("Bangladesh");

// with generics
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};
const res2 = createArrayWithGeneric<string>("BD");

type UserInfo = {
  id: number;
  name: string;
};
const res3 = createArrayWithGeneric<UserInfo>({
  id: 123,
  name: "Mr. Dev",
});

// create tuple with generics
const createTupleWithGenerics = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res4 = createTupleWithGenerics<string, number>("BD", 147570);
const res5 = createTupleWithGenerics<string, { name: string }>("BD", {
  name: "Asia",
});

const addCourseToStudent = <T>(student: T) => {
  const course: string = "Next Level Web Development";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent<{
  name: string;
  email: string;
  devType: string;
}>({
  name: "Student 1",
  email: "student1@gmail.com",
  devType: "NLWD",
});

const student2 = addCourseToStudent<{
  name: string;
  email: string;
  smartWatch: string;
}>({
  name: "Student 2",
  email: "student2@gmail.com",
  smartWatch: "Apple Watch",
});

console.log(student2);
