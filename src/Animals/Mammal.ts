export class Mammal {
  private readonly _eyeColor: string = "black";

  constructor(color?: string) {
    if (color === "brown"|| color === "blue") {
      this._eyeColor = color;
    }
  }

  get eyeColor(): string {
    return this._eyeColor;
  }
}