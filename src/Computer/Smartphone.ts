import {Computer} from "./Computer";

export class Smartphone extends Computer {
    public calculate(): void {
        throw new Error("Method not implemented.");
    }

    public on(): void {
        console.log("Smartphone with operation system " + this._OS + " is loading...");
    }

    public off(): void {
        console.log("Smartphone off");
    }

    async input(): Promise<void> {
        const question = await this.askQuestion("Enter variable: ");
        this.output(question)
    }

    public output(value: string): void {
        console.log("This variable is entered on Smartphone: " + value);
    }

}