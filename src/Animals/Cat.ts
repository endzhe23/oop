import {Mammal} from "./Mammal";

export class Cat extends Mammal {
  private _meowFrequency: number;

  public meow(): void {
    console.log("Mrrr");
  }

  public voice(): string {
    return "Meow";
  }
}