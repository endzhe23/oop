import {Car} from "./Car";
import {Engine} from "./Engine";

const car: Car = new Car();
console.log(Car.drive())
console.log(car.engine.model)
console.log(car.engine.frequency)

car.wheels.map((wheel) => console.log(wheel.model, wheel.radius))

car.wheels.map((wheel) => {
    wheel.model = "pirelli";
    wheel.radius = 17
})

car.wheels.map((wheel) => console.log(wheel.model, wheel.radius))

const engine: Engine = new Engine("V10", 1200);

car.engine = engine;
console.log(car.engine.model)
console.log(car.engine.frequency)


