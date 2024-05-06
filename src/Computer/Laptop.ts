import {Computer} from "./Computer";

export class Laptop extends Computer {
  public calculate(): void {
    console.log("Calculating on Laptop...");
  }

  public async input(): Promise<void> {
    const keyboard = this.keyboard;
    const value = await keyboard.enterValue("Enter variable: ");
    this.memory.data = value;
    this.output(value)
  }

  public off(): void {
    console.log("Laptop off");
  }

  public on(): void {
    console.log("Laptop with operation system " + this.OS + " is loading...");
  }

  public output(value: string): void {
    console.log("This variable is entered on Laptop: " + value);
  }
}