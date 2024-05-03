import {Engine} from "./Engine";
import {Wheel} from "./Wheel";


export class Car {
    private _engine: Engine;
    private _wheels: Wheel[];


    constructor() {
        this._engine = new Engine("V8", 1000);
        this._wheels = [
            new Wheel("king", 16),
            new Wheel("king", 16),
            new Wheel("king", 16),
            new Wheel("king", 16)
        ]
    }

    set engine(engine: Engine) {
        if (engine) {
            this._engine = engine;
        }
    }

    set wheels(wheels: Wheel[]) {
        if (wheels.length === 4) {
            this._wheels = wheels;
        }
    }

    get engine(): Engine {
        return this._engine;
    }

    get wheels(): Wheel[] {
        return this._wheels;
    }

    public static drive() {
        return "Car is driving";
    }
}