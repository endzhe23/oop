import {PC} from "./PC";
import {Cpu} from "./Cpu";
import {Gpu} from "./Gpu";
import {Memory} from "./Memory";
import {Laptop} from "./Laptop";
import {Smartphone} from "./Smartphone";

const PCcpu = new Cpu("intel core i5", 3.2);
const PCgpuMemory = new Memory("Kingston DDR6", 8, 3600);
const PCgpu = new Gpu("NVIDIA GTX 1050", 4.0, PCgpuMemory);
const PCram = new Memory("Kingston DDR4", 16, 2400);


const LTcpu = new Cpu("intel core i3", 2.0);
const LTgpuMemory = new Memory("Kingston DDR6", 4, 2600);
const LTgpu = new Gpu("NVIDIA GTX 1050", 2.0, LTgpuMemory);
const LTram = new Memory("Kingston DDR4", 8, 1000);

const SPcpu = new Cpu("Snapdragon 888", 2.0);
const SPgpuMemory = new Memory("Kingston DDR6", 4, 2600);
const SPgpu = new Gpu("Adreno 467", 2.0, SPgpuMemory);
const SPram = new Memory("Kingston DDR4", 8, 1000);

const pc: PC = new PC(PCcpu, PCgpu, PCram, "Windows 10");
const laptop: Laptop = new Laptop(LTcpu, LTgpu, LTram, "DOS");
const smartphone: Smartphone = new Smartphone(SPcpu, SPgpu, SPram, "Android 10");

async function main() {
  pc.on();
  await pc.input();
  pc.off();

  laptop.on();
  laptop.OS = "Debian 12"
  laptop.off();
  laptop.on();
  await laptop.input();
  laptop.off();

  smartphone.on();
  await smartphone.input();
  smartphone.off();
}

main().catch((e) => console.log(e))