import {Shape} from "./Shape";

export class Triangle extends Shape {
  private _cathet1: number = 3;
  private _cathet2: number = 4;
  private _hypotenuse: number;

  constructor(cathet1: number, cathet2: number) {
    super();
    if (cathet1 > 0 && cathet2 > 0) {
      this._area = this.calculateArea(cathet1, cathet2);
      this._hypotenuse = this.calculateHypotenuse(cathet1, cathet2);
      this._cathet1 = cathet1;
      this._cathet2 = cathet2;
    }
  }

  public get cathet1(): number {
    return this._cathet1;
  }

  public set cathet1(cathet1: number) {
    if (cathet1 > 0) {
      this._area = this.calculateArea(cathet1, this._cathet2);
      this._hypotenuse = this.calculateHypotenuse(cathet1, this._cathet2);
      this._cathet1 = cathet1;
    }
  }

  public get cathet2(): number {
    return this._cathet2;
  }

  public set cathet2(cathet2: number) {
    if (cathet2 > 0) {
      this._area = this.calculateArea(this._cathet1, cathet2);
      this._hypotenuse = this.calculateHypotenuse(this._cathet1, cathet2);
      this._cathet2 = cathet2;
    }
  }

  public get hypotenuse(): number {
    return this._hypotenuse;
  }

  private calculateHypotenuse(cathet1: number, cathet2: number): number {
    return Math.sqrt(cathet1 * cathet1 + cathet2 * cathet2);
  }

  protected calculateArea(cathet1: number, cathet2?: number): number {
    if (cathet2 === undefined) {
      return cathet1 * this._cathet2 / 2;
    }
    return cathet1 * cathet2 / 2;
  }
}