import {Dog} from "./Dog";
import {Cat} from "./Cat";
import {Mammal} from "./Mammal";
import {Tiger} from "./Tiger";

const dog1: Mammal = new Dog("brown");
const dog3 = dog1
const dog2: Mammal = new Dog("brown");
console.log(dog1 == dog3)
console.log(dog1 == dog2)
console.log(JSON.stringify(dog1) == JSON.stringify(dog2))

const cat: Mammal = new Cat("blue");
console.log(cat)

const tiger: Mammal = new Tiger("red");
console.log(tiger)

const mammals: Mammal[] = [dog1, cat, tiger];
for (const mammal of mammals) {
    console.log("Млекопитающее издает звук: " + mammal.voice());
}