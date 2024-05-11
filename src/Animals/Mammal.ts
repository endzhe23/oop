import {EyesColor} from "./EyesColor";

export abstract class Mammal {
  private readonly _eyeColor: EyesColor | string;

  constructor(color?: EyesColor | string) {
    this._eyeColor = "black"
    if (this.isValidValue(color, EyesColor)) {
      this._eyeColor = color;
    }
  }

  public get eyeColor(): string {
    return this._eyeColor;
  }

  public abstract voice(): string

  private isValidValue<T>(value: T | string, enumObject: T): boolean {
    if (typeof value === "string") {
      return Object.values(enumObject).includes(value.toLowerCase() as T);
    } else {
      return Object.values(enumObject).includes(value)
    }
  }
}