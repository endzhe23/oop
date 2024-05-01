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

const animals: Mammal[] = [dog, cat, tiger];
for (const animal of animals) {
    console.log(animal.voice());
}