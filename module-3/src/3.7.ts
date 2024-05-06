// 3-7 Statics In OOP

class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count = Counter.count + 1);
  }

  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

console.log(Counter.increment()); // same memory
console.log(Counter.increment()); // same memory
console.log(Counter.increment()); // same memory
