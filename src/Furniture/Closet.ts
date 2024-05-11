import {Furniture} from "./Furniture";
import {Color} from "./Color";
import {Material} from "./Material";

export class Closet extends Furniture{
  private _doorsCount: number;
  private _shelfCount: number;
  private _rodCount: number;
  private _boxCount: number;

  constructor(brand: string, material: Material | string, height: number, width: number, depth: number, color: Color | string, doorsCount: number, shelfCount: number, rodCount: number, boxCount: number) {
    super(brand, material, height, width, depth, color);
    if (doorsCount > 0) {
      this._doorsCount = doorsCount;
    } else {
      throw new Error("Недопустимое значение количества дверей тумбы");
    }
    if (shelfCount >= 0) {
      this._shelfCount = shelfCount;
    } else {
      throw new Error("Недопустимое значение количества полок шкафа");
    }
    if (rodCount >= 0) {
      this._rodCount = rodCount;
    } else {
      throw new Error("Недопустимое значение количества штанг шкафа");
    }
    if (boxCount >= 0) {
      this._boxCount = boxCount;
    } else {
      throw new Error("Недопустимое значение количества ящиков шкафа");
    }
  }
}