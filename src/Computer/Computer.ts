import {Memory} from "./Memory";
import {Cpu} from "./Cpu";
import {Gpu} from "./Gpu";
import {Keyboard} from "./Keyboard";

export abstract class Computer {
  private _cpu: Cpu;
  private _gpu: Gpu;
  private _memory: Memory;
  private _OS: string;
  private _keyboard: Keyboard;

  constructor(cpu: Cpu, gpu: Gpu, memory: Memory, OS: string, keyboard: Keyboard) {
    this._cpu = cpu;
    this._gpu = gpu;
    this._memory = memory;
    this._OS = OS;
    this._keyboard = keyboard;
  }

  public get keyboard(): Keyboard {
    return this._keyboard;
  }

  public get memory(): Memory {
    return this._memory;
  }

  public set OS(OS: string) {
    this._OS = OS;
  }

  public get OS(): string {
    return this._OS;
  }

  public abstract calculate(): void;

  public abstract on(): void;

  public abstract off(): void;

  public abstract input(): void;

  protected abstract output(value: string): void;
}