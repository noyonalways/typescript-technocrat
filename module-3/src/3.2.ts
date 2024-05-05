// 3-2: Inheritance In OOP.

class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(numberOfHours: number) {
    console.log(`${this.name} will sleep for ${numberOfHours}`);
  }
}

// Student
class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Mr. Student", 21, "Bangladesh");
student1.getSleep(6);

// Teacher
class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} will take class ${numberOfClass}`);
  }
}

const teacher1 = new Teacher("Mr. Teacher", 21, "Bangladesh", "Professor");
teacher1.takeClass(3);
