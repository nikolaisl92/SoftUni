function demo(input) {
    let index = 0;
    let countEasterBake = Number(input[index]);
    index++;
    let winBakerName = '';
    let winBakerPoints = 0;

    for (let i = 0; i < countEasterBake; i++) {
        let name = input[index];
        index++;
        let tempPoints = 0;
        let command = input[index];
        index++;
        while(command !== 'Stop') {
            let points = Number(command);
            tempPoints += points;
            command = input[index];
            index++
        }
        console.log(`${name} has ${tempPoints} points.`);
        
        if(tempPoints > winBakerPoints) {
            winBakerPoints = tempPoints;
            winBakerName = name;
            console.log(`${name} is the new number 1!`);
        }
    }
    console.log(`${winBakerName} won competition with ${winBakerPoints} points!`);
}
demo(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])