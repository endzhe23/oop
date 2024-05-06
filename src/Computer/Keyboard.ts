import * as readline from "node:readline";

export class Keyboard {
    private _model: string;
    constructor(model: string) {
        this._model = model;
    }
    public get model(): string {
        return this._model;
    }
    public enterValue(value: string): Promise<string> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(value, (answer: string) => {
                resolve(answer);
                rl.close();
            });
        });
    }
}