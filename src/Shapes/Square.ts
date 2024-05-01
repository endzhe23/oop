export class IntSquare {
  private _squareValue: number;

  set squareValue(value: number) {
    this._squareValue = this.calculateSquare(value);
  }

  get squareValue(): number {
    return this._squareValue;
  }

  private calculateSquare(value: number): number {
    return value * value;
  }
}

