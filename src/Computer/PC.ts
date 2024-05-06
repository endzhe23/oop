import {Computer} from "./Computer";

export class PC extends Computer {
  public calculate(): void {
    console.log("Calculating on PC...");
  }

  public async input(): Promise<void> {
    const keyboard = this.keyboard;
    const value = await keyboard.enterValue("Enter variable: ");
    this.memory.data = value;
    this.output(value)
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