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

  public set engine(engine: Engine) {
    if (engine) {
      this._engine = engine;
    }
  }

  public set wheels(wheels: Wheel[]) {
    if (wheels.length === 4) {
      this._wheels = wheels;
    }
  }

  public get engine(): Engine {
    return this._engine;
  }

  public get wheels(): Wheel[] {
    return this._wheels;
  }

  public static drive() {
    return "Car is driving";
  }
}