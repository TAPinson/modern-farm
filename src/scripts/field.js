const myField = [];

export const addPlant = (seed) => {
    //console.log("addPlant function test");
    myField.push(seed);
    //console.log(myField);
}

export const usePlants = () => {
    return myField.slice();

}