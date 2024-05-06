// 3-4: Type Guard Using Instance Of
// TODO: remove comment from 3.1.ts

// animal class
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`I am making sound`);
  }
}

// dog class
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log(`I am barking`);
  }
}

// cat class
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeow() {
    console.log(`I am meowing`);
  }
}

// If we handle in smart way we can use functions

const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};

const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};

const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
};

// const getAnimal = (animal: Animal) => {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeow();
//   } else {
//     animal.makeSound();
//   }
// };

const dog = new Dog("Dog Bhai", "dog");
const cat = new Cat("Cat Bhai", "cat");

getAnimal(cat);
