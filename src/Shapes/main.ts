import {Square} from "./Square";
import {Triangle} from "./Triangle";

const square = new Square(3);

const triangle = new Triangle(4, 3);
console.log(triangle.hypotenuse);

for (const shape of [square, triangle]) {
    console.log(shape.area);
}