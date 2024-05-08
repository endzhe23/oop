export class Calculator {
  private _count: number = 0;
  public static staticCount: number = 0;

  public add(x: number, y: number): number {
    return x + y;
  }

   public method1() {
    this._count = 1
  }

  public method2() {
    this._count = 1
  }
}