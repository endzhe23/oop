export class Mammal {
  private eyeColor: string = "black";

  constructor(color?: string) {
    if (color === "brown"|| color === "blue") {
      this.eyeColor = color;
    }
  }
  public getEyeColor(): string {
    return this.eyeColor;
  }
}