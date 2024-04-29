import {Mammal} from "./Mammal";

export class Cat extends Mammal {
  private meowFrequency: number;

  public meow(): void {
    return this.meow();
  }
}