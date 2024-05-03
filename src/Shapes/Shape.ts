export abstract class Shape {
    protected _area: number;

    get area(): number {
        return this._area
    }

    protected abstract calculateArea(value: number, ...values: number[]): number
}