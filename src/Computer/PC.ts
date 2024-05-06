import {Computer} from "./Computer";

export class PC extends Computer {
    public calculate(): void {
        console.log("Calculating on PC...");
    }

    async input(): Promise<void> {
        const question = await this.askQuestion("Enter variable: ");
        this.output(question)
    }

    off(): void {
        console.log("PC off");
    }

    on(): void {
        console.log("PC with operation system " + this._OS + " is loading...");
    }

    output(value: string): void {
        console.log("This variable is entered on PC: " + value);
    }
}