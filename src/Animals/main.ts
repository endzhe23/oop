import {Dog} from "./Dog";
import {Cat} from "./Cat";
import {Mammal} from "./Mammal";
import {Tiger} from "./Tiger";

const dog: Mammal = new Dog("brown");
console.log(dog)

const cat: Mammal = new Cat("blue");
console.log(cat)

const tiger: Mammal = new Tiger("red");
console.log(tiger)

const mammals: Mammal[] = [dog, cat, tiger];
for (const mammal of mammals) {
    console.log("Млекопитающее издает звук: " + mammal.voice());
}