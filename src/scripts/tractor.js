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
                createAsparagus();
                addPlant(plot);
            }
            else if (plot === "Wheat") {
               createWheat();
               addPlant(plot);
            }
            else if (plot === "Potato"){
                createPotato();
                addPlant(plot);
            }
            else if (plot === "Soybean") {
                createSoybean();
                addPlant(plot);
            }
            else if (plot === "Sunflower") {
                createSunflower();
                addPlant(plot);
            }
            else if (plot === "Corn") {
                createCorn();
                addPlant(plot);
            }
        }
    }
}