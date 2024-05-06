export class Memory {
    private _model: string;
    private _capacity: number;
    private _frequency: number;
    constructor(model: string, capacity: number, frequency: number) {
        this._model = model;
        this._capacity = capacity;
        this._frequency = frequency;
    }
}