export class IntSquare {
  private squareValue: number;

  public getSquare(value: number): number   {
    this.squareValue = this.calculateSquare(value);
    return this.squareValue;
  }

  private calculateSquare(value: number): number {
    return value * value;
  }
}

