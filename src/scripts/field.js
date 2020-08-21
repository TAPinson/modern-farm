export const myField = [];

export const addPlant = (seed) => {
    //console.log("addPlant function test");
    myField.push(seed);
    //console.log('my current field:', myField);
}

export const usePlants = () => {
    return myField.slice();

}