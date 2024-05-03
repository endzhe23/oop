export class Calculator {
    count: number = 0;
    static staticCount: number = 0;
    public add(x: number, y: number): number;
    public add(x: string, y: string): string;
    public add(x: string, y: number): string;
    public add(x: number, y: string): string;
    public add(x: any, y: any): any {
        return x + y;
    }

    method1() {
        let count: number = 0;
        count = 1;
        this.count = 1
    }

    method2() {
        let count: number = 0;
        count = 1;
        this.count = 1
    }
}