function datiebamaikata(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);
    let price = 0;

    // switch (season) {
    //     case "Spring": price = 3000; break;
    //     case "Summer": price = 4200; break;
    //     case "Autumn": price = 4200; break;
    //     case "Winter": price = 2600; break;
    // }
    if (season === "Spring") {
        price = 3000;
    } else if (season === "Summer") {
        price = 4200;
    } else if (season === "Autumn") {
        price = 4200;
    } else if (season === "Winter") {
        price = 2600;
    }

    if (count <= 6) {
        price = price * 0.9;
    } else if (count > 6 && count <= 11) {
        price = price * 0.85;
    } else if (count > 12) {
        price = price * 0.75;
    }
    if (count % 2 === 0 && season !== "Autumn") {
        price = (price * 0.95)
    }


    if (budget < price) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)

    } else {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    }
}
datiebamaikata(["3600",
"Autumn",
"6"])