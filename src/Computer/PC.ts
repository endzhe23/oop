import {Computer} from "./Computer";

export class PC extends Computer {
  public calculate(): void {
    console.log("Calculating on PC...");
  }

  public off(): void {
    console.log("PC off");
  }

  public on(): void {
    console.log("PC with operation system " + this.OS + " is loading...");
  }

  public output(value: string): void {
    console.log("This variable is entered on PC: " + value);
  }
}