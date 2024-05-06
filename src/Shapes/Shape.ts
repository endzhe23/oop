export abstract class Shape {
  protected _area: number;

  public get area(): number {
    return this._area
  }

  protected abstract calculateArea(value: number, ...values: number[]): number
}