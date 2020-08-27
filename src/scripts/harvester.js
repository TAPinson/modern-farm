export const harvestPlants = (plantsArray) => {
    const seedArray = []
    //console.log("plantsArray = ", plantsArray);
    for (const growingPlant of plantsArray){
        const plantOutput = growingPlant.output
        const cropType = growingPlant.type
        const corn = {
            type: "corn",
            height: 180,
            output: 6
        }
        //console.log('cropType =',cropType)
        if (cropType === undefined) {
            console.log('Found array is array')
            for (let i = 0; i < 3; i++) {
                seedArray.push(corn);
            }
        }
       else 
       for (let i = 0; i < plantOutput; i++) {
           seedArray.push(growingPlant)
        }
    }
    console.log(seedArray);
    return seedArray
}