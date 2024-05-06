import {PC} from "./PC";
import {Cpu} from "./Cpu";
import {Gpu} from "./Gpu";
import {Memory} from "./Memory";
import {Laptop} from "./Laptop";
import {Smartphone} from "./Smartphone";
import {Keyboard} from "./Keyboard";

const PCcpu = new Cpu("intel core i5", 3.2);
const PCgpuMemory = new Memory("Kingston DDR6", 8, 3600);
const PCgpu = new Gpu("NVIDIA GTX 1050", 4.0, PCgpuMemory);
const PCram = new Memory("Kingston DDR4", 16, 2400);
const PCkeyboard = new Keyboard("LogoTech");


const LTcpu = new Cpu("intel core i3", 2.0);
const LTgpuMemory = new Memory("Kingston DDR6", 4, 2600);
const LTgpu = new Gpu("NVIDIA GTX 1050", 2.0, LTgpuMemory);
const LTram = new Memory("Kingston DDR4", 8, 1000);
const LTkeyboard = new Keyboard("LogoTech");

const SPcpu = new Cpu("Snapdragon 888", 2.0);
const SPgpuMemory = new Memory("Kingston DDR6", 4, 2600);
const SPgpu = new Gpu("Adreno 467", 2.0, SPgpuMemory);
const SPram = new Memory("Kingston DDR4", 8, 1000);
const SPkeyboard = new Keyboard("Google keyboard");

const pc: PC = new PC(PCcpu, PCgpu, PCram, "Windows 10", PCkeyboard);
const laptop: Laptop = new Laptop(LTcpu, LTgpu, LTram, "DOS", LTkeyboard);
const smartphone: Smartphone = new Smartphone(SPcpu, SPgpu, SPram, "Android 10", SPkeyboard);

async function main() {
  pc.on();
  await pc.input();
  console.log("Variable on memory: " + pc.memory.data);
  pc.off();

  laptop.on();
  laptop.OS = "Debian 12"
  laptop.off();
  laptop.on();
  await laptop.input();
  console.log("Variable on memory: " + laptop.memory.data);
  laptop.off();

  smartphone.on();
  await smartphone.input();
  console.log("Variable on memory: " + smartphone.memory.data);
  smartphone.off();
}

main().catch((e) => console.log(e))