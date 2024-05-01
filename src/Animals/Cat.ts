import {Mammal} from "./Mammal";

export class Cat extends Mammal {
  private _meowFrequency: number;

  public meow(): void {
    return this.meow();
  }

  public voice(): string {
    return "Meow";
  }
}