import {Computer} from "./Computer";

export class Smartphone extends Computer {
  public calculate(): void {
    throw new Error("Method not implemented.");
  }

  public on(): void {
    console.log("Smartphone with operation system " + this.OS + " is loading...");
  }

  public off(): void {
    console.log("Smartphone off");
  }

  public output(value: string): void {
    console.log("This variable is entered on Smartphone: " + value);
  }

}