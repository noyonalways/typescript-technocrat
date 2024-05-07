# Problem Solving Set

1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

7. Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

10. Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

15. Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

# Solutions

- [Problem Solving Set](#problem-solving-set)
- [Solutions](#solutions)
  - [Problem-1:](#problem-1)
  - [Problem-2:](#problem-2)
  - [Problem-3:](#problem-3)
  - [Problem-4:](#problem-4)
  - [Problem-5:](#problem-5)
  - [Problem-6:](#problem-6)
  - [Problem-7:](#problem-7)
  - [Problem-8:](#problem-8)
  - [Problem-9:](#problem-9)
  - [Problem-10:](#problem-10)
  - [Problem-11:](#problem-11)
  - [Problem-12:](#problem-12)
  - [Problem-13:](#problem-13)
  - [Problem-14:](#problem-14)
  - [Problem-15:](#problem-15)

## Problem-1:

1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

```ts
function calculateSum(numbers: number[]): number {
  let sum: number = 0;
  if (numbers.length > 0) {
    for (let index = 0; index < numbers.length; index++) {
      sum = sum + numbers[index];
    }
    return sum;
  }
  return sum;
}

const numbers: number[] = [1, 2, 3, 4];
const sum: number = calculateSum(numbers);
console.log("sum:", sum);
```

## Problem-2:

2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: "User 1",
  age: 22,
  email: "user@example.com",
};

console.log(person);
```

## Problem-3:

3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

```ts
function calculateArea(length: number = 1, width: number = 1): number {
  return length * width;
}

const areaResult: number = calculateArea(10, 5);
console.log("ares:", areaResult);
```

## Problem-4:

4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

```ts
function reverseArr<T>(arr: T[]): T[] {
  const newArray = new Array();
  for (let index = arr.length - 1; index >= 0; index--) {
    newArray.push(arr[index]);
    console.log(index);
  }
  return newArray;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["mango", "banana", "cherry"];

const reversedNumbers = reverseArray(numbers);
const reversedStrings = reverseArr(strings);

console.log("reversed", reversedNumbers);
console.log("reversed", reversedStrings);
```

## Problem-5:

5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

```ts
interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | null;
  create(item: T): void;
  updateById(item: T): void;
  deleteById(id: number): void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

class GenericRepository<T extends User> implements Repository<T> {
  constructor(private users: T[] = []) {}

  // get all
  getAll(): T[] {
    return this.users;
  }

  // get by id
  getById(id: number): T | null {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      return null;
    }
    return user;
  }

  // create
  create(item: T): void {
    this.users.push(item);
  }

  // update by id
  updateById(item: T): void {
    const index = this.users.findIndex(
      (existingItem: T) => existingItem.id === item.id
    );
    if (index !== -1) {
      this.users[index] = item;
    } else {
      this.users.push(item);
    }
  }

  // delete by id
  deleteById(id: number): void {
    const index = this.users.findIndex((item: T) => item.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}

const repositories = new GenericRepository();

repositories.create({
  id: 111,
  name: "noyonalways",
  email: "noyonrahman2003@gmail.com",
});
repositories.create({
  id: 222,
  name: "codermdshakil",
  email: "mdshakil@gmail.com",
});

repositories.updateById({
  name: "test-name",
  email: "test-email@gmail.com",
  id: 33,
});

repositories.deleteById(111);

const getUserById = repositories.getById(222);
const getAllUsers = repositories.getAll();
console.log("user-by-id:", getUserById);
console.log("all-users:", getAllUsers);
```

## Problem-6:

6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

```ts
type Coordinates = {
  latitude: number;
  longitude: number;
};

const sampleLocation: Coordinates = {
  latitude: 40.7128,
  longitude: -74.006,
};

console.log(sampleLocation);
```

## Problem-7:

7. Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

```ts
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function printColorMessage(color: Color): void {
  switch (color) {
    case Color.Red:
      console.log("You selected Red");
      break;
    case Color.Green:
      console.log("You selected Green");
      break;
    case Color.Blue:
      console.log("You selected Blue");
      break;
    default:
      console.log("Invalid color");
      break;
  }
}

printColorMessage(Color.Blue);
```

## Problem-8:

8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

```ts
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

const rectangle: Rectangle = new Rectangle(10, 20);
console.log(rectangle.calculateArea());

const circle: Circle = new Circle(5);
console.log(circle.calculateArea());
```

## Problem-9:

9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

```ts
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

function combineCarAndDriver(car: Car, driver: Driver): Car & Driver {
  return {
    ...car,
    ...driver,
  };
}

const carInfo = combineCarAndDriver(
  { make: "Toyota", model: "Corola", year: 2012 },
  { name: "Mr. Driver", licenseNumber: "lice-039334323" }
);

console.log(carInfo);
```

## Problem-10:

10. Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

```ts
function convertToUppercase(input: string | string[]): string | string[] {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return input.map((str) => str.toUpperCase());
  } else {
    throw new Error("Invalid input");
  }
}

const strResult = convertToUppercase("hello");
const strArray = convertToUppercase([
  "hello",
  "world",
  "developer",
  "programmer",
  "typescript",
]);

console.log(strResult);
console.log(strArray);
```

## Problem-11:

11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

```ts
let initialValue: string | null = null;
initialValue = "my-string" as string;

console.log(initialValue.length);
```

## Problem-12:

12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

```ts
function processInput(input: unknown): void {
  if (typeof input === "string") {
    console.log(`You have been passed a ${input} string`);
  } else if (typeof input === "number") {
    console.log(`Hey! Wanna some operations with this ${input}`);
  } else {
    console.log("Unknown input type");
  }
}

processInput("hello world");
processInput(52);
```

## Problem-13:

13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

```ts
function getFirstElement<T extends number | string>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

console.log(getFirstElement(["mango", "banana", "apple"]));
console.log(getFirstElement([33, 44, 55]));
console.log(getFirstElement([])); // output: undefined
```

## Problem-14:

14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

```ts
function performOperations(
  param1: string | number,
  param2: boolean | string[]
): void {
  // Check the type of param1
  if (typeof param1 === "string") {
    console.log("Parameter 1 is a string:", param1.toUpperCase());
  } else if (typeof param1 === "number") {
    console.log("Parameter 1 is a number:", param1 * 2);
  }

  // Check the type of param2
  if (typeof param2 === "boolean") {
    console.log("Parameter 2 is a boolean:", param2 ? "true" : "false");
  } else if (Array.isArray(param2)) {
    console.log("Parameter 2 is an array of strings:", param2.join(", "));
  }
}

// Example usage
performOperations("hello", true);
performOperations(5, ["apple", "banana", "cherry"]);
performOperations(3.14, false);
```

## Problem-15:

15. Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

```ts
function filterArray<T>(arr: T[], callback: (value: T) => boolean): T[] {
  const filteredArray: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const names = ["Alice", "Bob", "Charlie", "Dave"];
const longNames = filterArray(names, (name) => name.length > 4);
console.log(longNames); // Output: ['Alice', 'Charlie']
```
