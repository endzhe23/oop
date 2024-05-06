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

  public async input(): Promise<void> {
    const keyboard = this.keyboard;
    const value = await keyboard.enterValue("Enter variable: ");
    this.memory.data = value;
    this.output(value)
  }

  public output(value: string): void {
    console.log("This variable is entered on Smartphone: " + value);
  }

}