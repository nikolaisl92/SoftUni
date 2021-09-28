function demo(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let comand = input[index];
    let suitcaseCounter = 0;
    let flag = true;

    while (comand !== 'End') {
        let suitcase = Number(input[index]);
        capacity -= suitcase;
        if (capacity <= 0) {
            console.log('No more space!');
            console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
            flag = false;
            break;
        }
        suitcaseCounter++;
        if (suitcaseCounter % 3 == 0) {
            suitcase *= 1.1;
        }
        index++;
        comand = input[index];
    }
    if (flag === true) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
    }
}
demo(["700.5",
    "180",
    "340.6",
    "126",
    "220"])



