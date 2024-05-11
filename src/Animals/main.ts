import {Dog} from "./Dog";
import {Cat} from "./Cat";
import {Mammal} from "./Mammal";
import {Tiger} from "./Tiger";
import {EyesColor} from "./EyesColor";

const dog1: Mammal = new Dog(EyesColor.BLUE);
const dog3 = dog1
const dog2: Mammal = new Dog(EyesColor.BROWN);
console.log(dog1 == dog3)
console.log(dog1 == dog2)
console.log(JSON.stringify(dog1) == JSON.stringify(dog2))

const cat: Mammal = new Cat(EyesColor.BLUE);
console.log(cat)

const tiger: Mammal = new Tiger("red");
console.log(tiger)

const mammals: Mammal[] = [dog1, cat, tiger];
for (const mammal of mammals) {
  console.log("Млекопитающее издает звук: " + mammal.voice());
}