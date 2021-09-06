function demo(input) {
    let num = Number(input[0]);
    let sum = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;
    let priceForBus = 200;
    let PriceForTruck = 175;
    let priceForTrain = 120;

    for (let i = 1; i <= num; i++) {
        current = Number(input[i]);
        sum += Number(input[i]);
        if (current <= 3) {
            bus += current;
        } else if (current <= 11) {
            truck += current;
        } else {
            train += current;
        }

    }
    average = ((bus * priceForBus) + (truck * PriceForTruck) + (train * priceForTrain)) / sum;
    busPercent = (bus / sum) * 100;
    truckPercent = (truck / sum) * 100;
    trainPercent = (train / sum) * 100;

    console.log(`${average.toFixed(2)}`)
    console.log(`${busPercent.toFixed(2)}%`)
    console.log(`${truckPercent.toFixed(2)}%`)
    console.log(`${trainPercent.toFixed(2)}%`)
}
demo([4,
    1,
    5,
    16,
    3
])