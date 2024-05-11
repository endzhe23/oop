import {Color} from "./Color";
import {Material} from "./Material";

export class Furniture {
    private _brand: string;
    private _material: Material | string;
    private _height: number;
    private _width: number;
    private _depth: number;
    private _color: Color | string;


    constructor(brand: string, material: Material | string, height: number, width: number, depth: number, color: Color | string) {
        if (!this.isValidValue(material, Material)) {
            throw new Error("Недопустимое значение материала шкафа");
        }
        this._material = material.toLowerCase();
        if (!this.isValidValue(color, Color)) {
            throw new Error("Недопустимое значение цвета шкафа");
        }
        this._color = color.toLowerCase();
        if (height < 100 || height > 220) {
            throw new Error("Недопустимое значение высоты шкафа");
        }
        this._height = height;
        if (width < 60 || width > 500) {
            throw new Error("Недопустимое значение ширины шкафа");
        }
        this._width = width;
        if (depth < 40 || depth > 90) {
            throw new Error("Недопустимое значение глубины шкафа");
        }
        this._depth = depth;
        if (brand.length === 0) {
            throw new Error("Недопустимое значение длины названия шкафа");
        }
        this._brand = brand;
    }

    public get brand(): string {
        return this._brand;
    }

    public set brand(brand: string) {
        if (brand.length === 0) {
            throw new Error("Недопустимое значение длины названия шкафа");
        }
        this._brand = brand;
    }

    public get material(): Material | string {
        return this._material;
    }

    public set material(material: Material | string) {
        if (!this.isValidValue(material, Material)) {
            throw new Error("Недопустимое значение материала шкафа");
        }
        this._material = material.toLowerCase();
    }

    public get color(): Color | string {
        return this._color;
    }

    public set color(color: Color | string) {
        if (!this.isValidValue(color, Color)) {
            throw new Error("Недопустимое значение цвета шкафа");
        }
        this._color = color.toLowerCase();
    }


    public calculateDimensions(): number {
        const height = this._height / 100;
        const width = this._width / 100;
        const depth = this._depth / 100;
        return height * width * depth;
    }

    private isValidValue<T>(value: T | string, enumObject: T): boolean {
        if (typeof value === "string") {
            return Object.values(enumObject).includes(value.toLowerCase() as T);
        } else {
            return Object.values(enumObject).includes(value)
        }
    }
}