export class Cube {
  private _side: number = 10;
  private _color: string = "blue";

  constructor(side?: number, color?: string) {
    if (color === "white" || color === "red") {
      this._color = color;
    }
    if (side > 5 && side <= 20) {
      this._side = side;
    }
  }

  set side(side: number) {
   if (side > 5 && side < 20) {
     this._side = side;
   }
  }

  get side(): number {
    return this._side;
  }

  set color(color: string) {
    if (color === "grey" || color === "black") {
      this._color = color;
    }
  }

  get color(): string {
    return this._color;
  }
}

