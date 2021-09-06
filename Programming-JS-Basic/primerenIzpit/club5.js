function demo(input) {
    let wanted = Number(input[0]);
    let index = 1;
    let comand = input[index];
    index++;
    let income = 0;
    let isTrue = true;

    while (comand !== 'Party!') {
        let cocktail = comand;
        let price = cocktail.length;
        let countCocktail = Number(input[index]);
        let moneyToPay = price * countCocktail;
        index++;
        if (moneyToPay % 2 !== 0) {
            moneyToPay *= 0.75;
        } else {
            moneyToPay = moneyToPay;
        }
        income +=moneyToPay;
        wanted -= moneyToPay;
        if(wanted <= 0) {
            console.log("Target acquired.");
            isTrue = false;
            break;
        }
        comand = input[index];
        index++;
    }
    if(isTrue){
    console.log(`We need ${wanted.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`)

}
demo(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
