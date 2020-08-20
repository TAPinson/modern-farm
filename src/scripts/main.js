console.log("Welcome to the main module");

import { createPlan } from './plan.js';
const yearlyPlan = createPlan();
//console.log(yearlyPlan);

// Create asparagus seed
import { createAsparagus } from './asparagus.js'
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

// Create potato seed
import { createPotato } from './potato.js'
const potatoSeed = createPotato()
console.log(potatoSeed);

// Create soybean seed
import { createSoybean } from './soybean.js' 
const soybeanSeed = createSoybean()
console.log(soybeanSeed);

// Creare sunflower seed
import { createSunflower } from './sunflower.js'
const sunflowerSeed = createSunflower();
console.log(sunflowerSeed)

// Create wheat seed
import { createWheat } from './wheat.js'
const wheatSeed = createWheat()
console.log(wheatSeed)

// Create corn seed
import { createCorn } from './corn.js'
const cornSeed = createCorn()
console.log(cornSeed)