function demo(input) {
    let xSqM = Number(input[0]);
    let yGrape = Number(input[1]);
    let zWine = Number(input[2]);
    let workers = Number(input[3]);

    let allGrape = xSqM * yGrape;
    let wine = allGrape / 2.5 * 0.4;
    let forWorkers = Math.abs(wine - zWine);
    let forPerson = forWorkers / workers;

    if (wine < zWine) {
        console.log(`It will be a tough winter! More ${Math.floor(forWorkers)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.floor(forWorkers)} liters left -> ${Math.floor(forPerson)} liters per person.`);
    }

}
demo(['1020' ,'1.5' ,'425' ,'4'])