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
    this._doorsCount = doorsCount;
    this._shelfCount = shelfCount;
    this._rodCount = rodCount;
    this._boxCount = boxCount;
  }
}