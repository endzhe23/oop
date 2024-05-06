export class Memory {
  private _model: string;
  private _capacity: number;
  private _frequency: number;
  private _data: string;

  constructor(model: string, capacity: number, frequency: number) {
    this._model = model;
    this._capacity = capacity;
    this._frequency = frequency;
  }

  public set data(data: string) {
    this._data = data;
  }

  public get data(): string {
    return this._data;
  }
}