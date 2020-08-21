import { createAsparagus } from './seeds/asparagus.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js' 
import { createSunflower } from './seeds/sunflower.js'
import { createCorn } from './seeds/corn.js'
import { addPlant } from './field.js'

export const plantSeeds = (plantingPlan) => {
    //console.log(plantingPlan);
    for (const plantRow of plantingPlan) {
        //console.log(typeof plantRow);
        for (const plot of plantRow) {
            //console.log(plot);
            if (plot === "Asparagus") {
                addPlant(createAsparagus());
            }
            else if (plot === "Wheat") {
               addPlant(createWheat());
            }
            else if (plot === "Potato"){
                addPlant(createPotato());
            }
            else if (plot === "Soybean") {
                addPlant(createSoybean());
            }
            else if (plot === "Sunflower") {
                addPlant(createSunflower());
            }
            else if (plot === "Corn") {
                addPlant(createCorn());
            }
        }
    }
}