export abstract class Shape {
    private _area: number;

    set area(area: number) {
        this._area = area;
    }

    get area(): number {
        return this._area;
    }

    abstract calculateArea(value1: number, ...value2: number[]): void;
}