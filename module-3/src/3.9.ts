// 3-9 Abstraction In OOP

// using the interface
interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car1 implements Vehicle1 {
  startEngine(): void {
    console.log(`I am starting the car engine`);
  }

  stopEngine(): void {
    console.log(`I am stopping the car engine`);
  }

  move(): void {
    console.log(`I am moving the car`);
  }

  test(): void {
    console.log(`I am testing the car`);
  }
}

const toyota = new Car1();
toyota.startEngine();

// using abstract
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
  abstract test(): void;
}

class Honda extends Car2 {
  startEngine(): void {
    console.log(`I am starting the honda engine`);
  }
  stopEngine(): void {
    console.log(`I am stopping the honda engine`);
  }
  move(): void {
    console.log(`I am moving the honda`);
  }
  test(): void {
    console.log(`I am testing the honda`);
  }
}

const honda = new Honda();
honda.startEngine();

// const honda = new Car2();
// Cannot create an instance of an abstract class
