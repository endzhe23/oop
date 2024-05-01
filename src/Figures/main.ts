import {Ball} from "./Ball";
import {Cube} from "./Cube";

const cube = new Cube(20, "red");
console.log(cube.color, cube.side);

const ball1: Ball = new Ball(20, "red");
const ball2: Ball = new Ball(30, "blue",);
const ball3: Ball = new Ball(50, "green");
const ball4: Ball = new Ball(10);
const ball5: Ball = new Ball();
ball1.color = "sdfgsdfg";
ball1.radius = 10;

const balls: Ball[] = [ball1, ball2, ball3, ball4, ball5];

for (const ball of balls) {
  console.log(ball.color, ball.radius);
}