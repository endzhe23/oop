export class Engine {
  private readonly _frequency: number = 1000;
  private readonly _model: string = "V8";

  public get model(): string {
    return this._model;
  }

  constructor(model: string, frequency: number) {
    if (model === "V8" || model === "V10") {
      this._model = model;

    }
    if (frequency > 900 && frequency < 1500) {
      this._frequency = frequency;
    }
  }

  public get frequency(): number {
    return this._frequency;
  }
}

