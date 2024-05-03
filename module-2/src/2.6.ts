// 2-6: Constraints In Typescript

// constraints -> force

interface Student {
  id: number;
  name: string;
  email: string;
}

const addCourseToStudent1 = <T extends Student>(student: T) => {
  const course: string = "Next Level Web Development";

  return {
    ...student,
    course,
  };
};

const student3 = addCourseToStudent1<{
  id: number;
  name: string;
  email: string;
  devType: string;
}>({
  id: 111,
  name: "Student 1",
  email: "student1@gmail.com",
  devType: "NLWD",
});

const student4 = addCourseToStudent1<{
  id: number;
  name: string;
  email: string;
  smartWatch: string;
}>({
  id: 222,
  name: "Student 2",
  email: "student2@gmail.com",
  smartWatch: "Apple Watch",
});

const student5 = addCourseToStudent1<Student>({
  id: 333,
  name: "Student 3",
  email: "student3@gmail.com",
});
