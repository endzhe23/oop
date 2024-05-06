import {Memory} from "./Memory";
import {Cpu} from "./Cpu";
import {Gpu} from "./Gpu";
import * as readline from "node:readline";

export abstract class Computer {
    private _cpu: Cpu;
    private _gpu: Gpu;
    private _memory: Memory;
    protected _OS: string;

    constructor(cpu: Cpu, gpu: Gpu, memory: Memory, OS: string) {
        this._cpu = cpu;
        this._gpu = gpu;
        this._memory = memory;
        this._OS = OS;
    }

    protected askQuestion(question: string): Promise<string> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(question, (answer: string) => {
                resolve(answer);
                rl.close();
            });
        });
    }

    public abstract calculate(): void;

    public abstract on(): void;

    public abstract off(): void;

    public abstract input(): void;

    protected abstract output(value: string): void;
}