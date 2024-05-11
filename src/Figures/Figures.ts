export abstract class Figures {
    protected _volume: number;

    public get volume(): number {
        return this._volume;
    }

    protected abstract calculateVolume(value: number, ...values: number[]): number;

    protected isValidValue<T>(value: T | string, enumObject: T): boolean {
        if (typeof value === "string") {
            return Object.values(enumObject).includes(value.toLowerCase() as T);
        } else {
            return Object.values(enumObject).includes(value)
        }
    }
}