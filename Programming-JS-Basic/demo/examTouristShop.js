function demo(input) {
    let budget = Number(input[0]);
    let index = 1;
    let name = input[index];
    let sum = 0;
    let sumCount = 0;
    let flag = true;


    while (name !== 'Stop') {
        sumCount++;
        index++;
        let current = Number(input[index]);
        if (sumCount % 3 === 0) {
            current = current / 2;
        }
        sum += current;
        if (sum > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(sum - budget).toFixed(2)} leva!`);
            flag = false;
            break;
        }
        index++;
        name = input[index];
    }
    if (flag) {
        console.log(`You bought ${sumCount} products for ${sum.toFixed(2)} leva.`);
    }
}
demo(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])


