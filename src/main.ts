import {Ball} from "./Ball";
import {Cube} from "./Cube";
import {IntSquare} from "./Square";
import {Dog} from "./Dog";
import {Cat} from "./Cat";

const ball1: Ball = new Ball(20, "red");
const ball2: Ball = new Ball(30, "blue",);
const ball3: Ball = new Ball(50, "green");
const ball4: Ball = new Ball(10);
const ball5: Ball = new Ball();
// ball.setColor("sdfgsdfg");
// ball.setRadius(10);

const balls: Ball[] = [ball1, ball2, ball3, ball4, ball5];

for (const ball of balls) {
  console.log(ball.getColor(), ball.getRadius("secret"));
}

const cube = new Cube(20, "red");
console.log(cube.getColor(), cube.getSide())

const square = new IntSquare();
console.log(square.getSquare(3));


const dog = new Dog("brown");
console.log(dog);

const cat = new Cat("blue");
console.log(cat)