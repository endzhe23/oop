import {BallColor} from "./BallColor";
import {Figures} from "./Figures";

export class Ball extends Figures {
  private _color: BallColor | string = "black";
  private _radius: number = 5;

  constructor(radius: number, color: BallColor | string) {
    super();
    if (this.isValidValue(color, BallColor)) {
      this._color = color;
    } else {
      throw new Error("Недопустимое значение цвета шара");
    }
    if (radius > 1 && radius < 10) {
      this._radius = radius;
    } else {
      throw new Error("Недопустимое значение радиуса шара");
    }
    this._volume = this.calculateVolume(radius);
  }

  public get color(): BallColor | string {
    return this._color;
  }

  public set color(color: BallColor | string) {
    if (this.isValidValue(color, BallColor)) {
      this._color = color;
    } else {
      throw new Error("Недопустимое значение цвета шара");
    }
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(radius: number) {
    if (radius > 1 && radius < 10) {
      this._radius = radius;
    } else {
      throw new Error("Недопустимое значение радиуса шара");
    }
    this._volume = this.calculateVolume(radius);
  }

  protected calculateVolume(value: number): number {
    return Math.PI * Math.pow(value, 3) * 4 / 3;
  }
}

