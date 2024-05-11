import {Ball} from "./Ball";
import {Cube} from "./Cube";
import {CubeColor} from "./CubeColor";
import {BallColor} from "./BallColor";

const cube = new Cube(20, CubeColor.BLACK);
console.log(cube.color, cube.side, cube.volume);

const ball1: Ball = new Ball(5, BallColor.YELLOW);
const ball2: Ball = new Ball(6, BallColor.RED);
const ball3: Ball = new Ball(3, BallColor.BROWN);
const ball4: Ball = new Ball(2, BallColor.BLUE);
const ball5: Ball = new Ball(4, BallColor.BROWN);
ball1.color = BallColor.BLUE;
ball1.radius = 5;
console.log(ball1.radius, ball1.color, ball1.volume);

const balls: Ball[] = [ball1, ball2, ball3, ball4, ball5];

for (const ball of balls) {
  console.log(ball.color, ball.radius);
}