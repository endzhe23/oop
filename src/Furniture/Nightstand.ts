import {Furniture} from "./Furniture";
import {Color} from "./Color";
import {Material} from "./Material";

export class Nightstand extends Furniture {
    private _doorsCount: number;
    private _shelfCount: number;
    private _boxCount: number;

    constructor(brand: string, material: Material | string, height: number, width: number, depth: number, color: Color | string, doorsCount: number, shelfCount: number, boxCount: number) {
        super(brand, material, height, width, depth, color);
        if (doorsCount > 0) {
            this._doorsCount = doorsCount;
        } else {
            throw new Error("Недопустимое значение количества дверей тумбы");
        }
        if (shelfCount >= 0) {
            this._shelfCount = shelfCount;
        } else {
            throw new Error("Недопустимое значение количества полок тумбы");
        }
        if (boxCount >= 0) {
            this._boxCount = boxCount;
        } else {
            throw new Error("Недопустимое значение количества ящиков тумбы");
        }
    }
}