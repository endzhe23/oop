import {Mammal} from "./Mammal";

export class Dog extends Mammal {
  private _barkFrequency: number;

  public bark(): void {
    return this.bark();
  }

  public voice(): string {
    return "Woof";
  }
}