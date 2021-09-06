function demo(input) {
    let people = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    for (i = 1; i <= people; i++) {
        let current = input[i];
        if (current === 'Back') {
            back++;
        } else if (current === 'Chest') {
            chest++;
        } else if (current === 'Legs') {
            legs++;
        } else if (current === 'Abs') {
            abs++;
        } else if (current === 'Protein shake') {
            proteinShake++;
        } else if (current === 'Protein bar') {
            proteinBar++;
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    let forWork = back + chest + legs + abs;
    let forDrink = proteinBar + proteinShake;
    let perWork = forWork / people * 100;
    let perDrink = forDrink / people * 100;
    console.log(`${perWork.toFixed(2)}% - work out`);
    console.log(`${perDrink.toFixed(2)}% - protein`);

}
demo(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])