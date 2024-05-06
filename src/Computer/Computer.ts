import {Memory} from "./Memory";
import {Cpu} from "./Cpu";
import {Gpu} from "./Gpu";
import * as readline from "node:readline";

export abstract class Computer {
  private _cpu: Cpu;
  private _gpu: Gpu;
  private _memory: Memory;
  private _OS: string;

  constructor(cpu: Cpu, gpu: Gpu, memory: Memory, OS: string) {
    this._cpu = cpu;
    this._gpu = gpu;
    this._memory = memory;
    this._OS = OS;
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

  private enterValue(): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question("Enter variable: ", (answer: string) => {
        resolve(answer);
        rl.close();
      });
    });
  }

  public abstract calculate(): void;

  public abstract on(): void;

  public abstract off(): void;

  public async input(): Promise<void> {
    const value = await this.enterValue();
    this.memory.data = value;
    this.output(value)
  }

  protected abstract output(value: string): void;
}