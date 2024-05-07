// 8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

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
