export class Wheel {
    private _model: string = "king";
    private _radius: number = 16;

    get model(): string {
        return this._model;
    }

    get radius(): number {
        return this._radius;
    }

    set model(model: string) {
        if (model === "king" || model === "pirelli") {
            this._model = model;
        }
    }

    set radius(radius: number) {
        if (radius >= 15 && radius <= 17) {
            this._radius = radius;
        }
    }

    constructor(model: string, radius: number) {
        if (model === "king" || model === "pirelli") {
            this._model = model;
        }
        if (radius >= 15 && radius <= 17) {
            this._radius = radius;
        }
    }
}