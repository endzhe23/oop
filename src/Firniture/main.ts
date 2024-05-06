import {Closet} from "./Closet";

const closet = new Closet("IKEA", "wood", 200, 200, 60, "white", 2, 4, 2, 2);
console.log(closet);
console.log("Closet volume is "+ closet.calculateDimensions() + " cubic meters");