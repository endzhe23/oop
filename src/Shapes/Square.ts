import {Shape} from "./Shape";

export class Square extends Shape {
  private _side: number;

  constructor(side: number) {
    super();
    this._area = this.calculateArea(side);
    this._side = side;
  }

  public set side(side: number) {
    this._area = this.calculateArea(side);
    this._side = side
  }

  public get side(): number {
    return this._side;
  }

  protected calculateArea(value: number): number {
    return value * value;
  }
}

