export class Firniture {
    private _brand: string;
    private _material: string;
    private _height: number;
    private _width: number;
    private _depth: number;
    private _color: string;

    constructor(brand: string, material: string, height: number, width: number, depth: number, color: string) {
        this._brand = brand;
        this._material = material;
        this._height = height;
        this._width = width;
        this._depth = depth;
        this._color = color;
    }

    public get brand(): string {
        return this._brand;
    }

    public set brand(brand: string) {
        this._brand = brand;
    }

    public get material(): string {
        return this._material;
    }

    public set material(material: string) {
        this._material = material;
    }

    public calculateDimensions(): number {
        const height = this._height/100;
        const width = this._width/100;
        const depth = this._depth/100;
        return height * width * depth;
    }
}