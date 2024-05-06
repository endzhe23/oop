import {Computer} from "./Computer";

export class Laptop extends Computer {
    public calculate(): void {
        console.log("Calculating on Laptop...");
    }

    async input(): Promise<void> {
        const question = await this.askQuestion("Enter variable: ");
        this.output(question)
    }

    off(): void {
        console.log("Laptop off");
    }

    on(): void {
        console.log("Laptop with operation system " + this._OS + " is loading...");
    }

    output(value: string): void {
        console.log("This variable is entered on Laptop: " + value);
    }
}