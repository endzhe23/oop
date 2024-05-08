import {Firniture} from "./Firniture";

export class Closet extends Firniture{
  private _doorsCount: number;
  private _shelfCount: number;
  private _rodCount: number;
  private _boxCount: number;

  constructor(brand: string, material: string, height: number, width: number, depth: number, color: string, doorsCount: number, shelfCount: number, rodCount: number, boxCount: number) {
    super(brand, material, height, width, depth, color);
    this._doorsCount = doorsCount;
    this._shelfCount = shelfCount;
    this._rodCount = rodCount;
    this._boxCount = boxCount;
  }
}