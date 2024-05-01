export class Triangle {
  private cathet1: number =  3;
  private cathet2: number = 4;
  private hypotenuse: number = 5;

  constructor(cathet1?: number, cathet2?: number) {
      if (cathet1 > 0 && cathet1 < 13) {
        this.calculateHypotenuse(cathet1, cathet2);
      }
      if (cathet2 > 0 && cathet2 < 13) {
         this.calculateHypotenuse(cathet1, cathet2);
      }
  }

  public getCathet1() : number {
    return this.cathet1;
  }

  public setCathet1(cathet1: number, cathet2: number) : void {
      if (cathet1 > 0 && cathet1 < 13) {
          this.calculateHypotenuse(cathet1, cathet2);
      }
}

    public getCathet2(): number {
        return this.cathet2;
    }

    public setCathet2(cathet1: number, cathet2: number) : void {
        if (cathet2 > 0 && cathet2 < 13) {
            this.calculateHypotenuse(cathet1, cathet2);
        }
    }

   public getHypotenuse(cathet1: number, cathet2: number): number {
       this.hypotenuse = this.calculateHypotenuse(cathet1, cathet2);
       return this.hypotenuse;
   }

    private calculateHypotenuse(cathet1: number, cathet2: number): number {
        const hypotenuse = Math.sqrt(cathet1 * cathet1 + cathet2 * cathet2);
        return hypotenuse;
    }
}