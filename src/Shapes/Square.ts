import {Shape} from "./Shape";

export class Square extends Shape {
    private _side: number;

    constructor(side: number) {
        super();
        this._area = this.calculateArea(side);
        this._side = side;
    }

    set side(side: number) {
        this._area = this.calculateArea(side);
        this._side = side
    }

    get side(): number {
        return this._side;
    }

    protected calculateArea(value: number): number {
        return value * value;
    }
}

