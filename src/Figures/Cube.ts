import {CubeColor} from "./CubeColor";
import {Figures} from "./Figures";

export class Cube extends Figures{
  private _side: number = 10;
  private _color: CubeColor | string = "blue";

  constructor(side: number, color: CubeColor | string) {
    super();
    if (this.isValidValue(color, CubeColor)) {
      this._color = color;
    } else {
      throw new Error("Недопустимое значение цвета куба");
    }
    if (side > 5 && side <= 20) {
      this._side = side;
    } else {
      throw new Error("Недопустимое значение стороны куба");
    }
    this._volume = this.calculateVolume(side);
  }

  public set side(side: number) {
    if (side > 5 && side < 20) {
      this._side = side;
    } else {
      throw new Error("Недопустимое значение стороны куба");
    }
    this._volume = this.calculateVolume(side);
  }

  public get side(): number {
    return this._side;
  }

  public set color(color: CubeColor | string) {
    if (this.isValidValue(color, CubeColor)) {
      this._color = color;
    } else {
      throw new Error("Недопустимое значение цвета куба");
    }
  }

  public get color(): CubeColor | string {
    return this._color;
  }

  protected calculateVolume(value: number): number {
    return value * value * value;
  }
}


