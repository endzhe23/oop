export abstract class Mammal {
  private readonly _eyeColor: string;

  constructor(color?: string) {
    this._eyeColor = "black"
    if (color === "brown" || color === "blue" || color === "red") {
      this._eyeColor = color;
    }
  }

  public get eyeColor(): string {
    return this._eyeColor;
  }

  public abstract voice(): string
}