export class Ball {
  private color: string = "black";
  private radius: number = 5;

  constructor(radius?: number, color?: string) {
    if (color === "red" || color === "blue" || color === "green") {
      this.color = color;
    }
    if (radius > 1 && radius < 10) {
      this.radius = radius;
    }
  }

  // constructor() {
  // }

  public setColor(color: string): void {
    if (color === "red" || color === "blue" || color === "green" || color === "yellow") {
      this.color = color;
    }
  }

  public getColor(): string {
    return this.color;
  }

  public setRadius(radius: number): void {
    if (radius > 1 && radius < 10) {
      this.radius = radius;
    }
  }

  public getRadius(key?: string): number {
    if (key === "secret") {
      return this.radius;
    }
  }
}

