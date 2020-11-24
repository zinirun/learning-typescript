interface Shape {
    getArea(): number;
}

// public, private 명시하면 생성자에서 굳이 안적어도 됨
class Circle implements Shape {
    constructor(public radius: number) {}

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    getArea() {
        return this.width * this.height;
    }
}

const circle: Circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => console.log(shape.getArea()));
