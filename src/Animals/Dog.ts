import {Mammal} from "./Mammal";

export class Dog extends Mammal {
    private _barkFrequency: number;

    public bark(): void {
        console.log("Gaw");
    }

    public voice(): string {
        return "Woof";
    }
}