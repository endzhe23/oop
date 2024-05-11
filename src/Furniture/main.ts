import {Closet} from "./Closet";
import {Nightstand} from "./Nightstand";
import {Furniture} from "./Furniture";
import {Color} from "./Color";
import {Material} from "./Material";


try {
    const closet = new Closet("IKEA", Material.WOOD, 200, 200, 60, Color.BLUE, 2, 4, 2, 2);
    closet.color = "Brown";
    console.log(closet);
    console.log("Closet volume is "+ closet.calculateDimensions() + " cubic meters");
    const furniture = new Furniture("Hoff", Material.METAL, 180, 150,  50, "Blue");
    furniture.material = "plastic";
    console.log(furniture)
    const nightstand = new Nightstand("Лагуна", Material.PLASTIC, 110, 100, 40, Color.GREEN, 2, 1, 2);
    nightstand.brand = "IKEA";
    console.log(nightstand);
} catch (e) {
    console.error(e.toString())
}


