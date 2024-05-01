export class Ball {
  private _color: string = "black";
  private _radius: number = 5;

  constructor(radius?: number, color?: string) {
    if (color === "red" || color === "blue" || color === "green") {
      this._color = color;
    }
    if (radius > 1 && radius < 10) {
      this._radius = radius;
    }
  }

  get color(): string {
    return this._color;
  }

  set color(color: string) {
    if (color === "red" || color === "blue" || color === "green" || color === "yellow") {
      this._color = color;
    }
  }

  get radius(): number {
    return this._radius;
  }

  set radius(radius: number) {
    if (radius > 1 && radius < 10) {
      this._radius = radius;
    }
  }
}

