function demo(input) {
    let name = input[0];
    let forOld = Number(input[1]);
    let forChild = Number(input[2]);
    let netOld = Number(input[3]);
    let obslujvane = Number(input[4]);

    let netChild = netOld - (netOld*0.7);
    let priceOld = netOld + obslujvane;
    let priceChild = netChild + obslujvane;
    let all = (forChild * priceChild) + (forOld * priceOld);
    let pechalba = all * 0.2;
    console.log(`The profit of your agency from ${name} tickets is ${(pechalba).toFixed(2)} lv.`)

}
demo(["Ryanair",
    '60',
    '23',
    '158.96',
    '39.12',
    ])