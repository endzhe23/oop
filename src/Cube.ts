export class Cube {
  private side: number = 10;
  private color: string = "blue";

  constructor(side?: number, color?: string) {
    if (color === "white" || color === "red") {
      this.color = color;
    }
    if (side > 5 && side <= 20) {
      this.side = side;
    }
  }

  public setSide(side: number): void {
   if (side > 5 && side < 20) {
     this.side = side;
   }
  }

  public getSide(): number {
    return this.side;
  }

  public setColor(color?: string) : void {
    if (color === "grey" || color === "black") {
      this.color = color;
    }
  }

  public getColor(): string {
    return this.color;
  }
}

