//console.log("You have accessed main.js");

import { createPlan } from './plan.js';
const yearlyPlan = createPlan();
//console.log(yearlyPlan);

// Create asparagus seed
import { createAsparagus } from './seeds/asparagus.js'
const asparagusSeed = createAsparagus();
//console.log(asparagusSeed);

// Create potato seed
import { createPotato } from './seeds/potato.js'
const potatoSeed = createPotato()
//console.log(potatoSeed);

// Create soybean seed
import { createSoybean } from './seeds/soybean.js' 
const soybeanSeed = createSoybean()
//console.log(soybeanSeed);

// Creare sunflower seed
import { createSunflower } from './seeds/sunflower.js'
const sunflowerSeed = createSunflower();
//console.log(sunflowerSeed)

// Create wheat seed
import { createWheat } from './seeds/wheat.js'
const wheatSeed = createWheat()
//console.log(wheatSeed)

// Create corn seed
import { createCorn } from './seeds/corn.js'
const cornSeed = createCorn()
//console.log(cornSeed)

// Testing addPlant function
//import { addPlant } from './field.js'
//addPlant(wheatSeed);
//addPlant(asparagusSeed)
//addPlant(potatoSeed)
//addPlant(soybeanSeed)
//addPlant(sunflowerSeed)
//addPlant(cornSeed);

// Testing usePLants function
import { usePlants } from './field.js'
const usePlantsTester = usePlants();
//console.log(usePlantsTester);

// Check to confirm if corn is being passed into usePlants array as an array
//console.log(Array.isArray(usePlantsTester[5]));

// Section below for working with tractor.js
import { plantSeeds } from './tractor.js';

const testArray = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(yearlyPlan);
import { myField } from './field.js'
//console.log(myField);

// Section below for working with harvester.js
import { harvestPlants } from './harvester.js';
harvestPlants(myField);
//console.log(myField);