import {Memory} from "./Memory";

export class Gpu {
  private _model: string;
  private _frequency: number;
  private _memory: Memory;

  constructor(model: string, frequency: number, memory: Memory) {
    this._model = model;
    this._frequency = frequency;
    this._memory = memory;
  }
}