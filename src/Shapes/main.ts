import {IntSquare} from "./Square";
import {Triangle} from "./Triangle";

const square = new IntSquare();
square.squareValue = 3;
console.log(square.squareValue);

const triangle = new Triangle(4, 3);
console.log(triangle.hypotenuse);
triangle.cathet1 = 12;
console.log(triangle.hypotenuse);
triangle.cathet2 = 5;
console.log(triangle.hypotenuse);