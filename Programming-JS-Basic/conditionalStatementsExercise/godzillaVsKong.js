function godzillaVsKong (input) {
    let budget = Number (input[0]);
    let statists = Number (input[1]);
    let price = Number (input[2]);

    if (statists > 150) {
        price = price - (price * 0.1);
    }

    let decor = budget * 0.1;
    let sumClotes = statists * price;
    final = decor + sumClotes;
    let then = budget - final;

    if (final > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(final - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - final).toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000", "120", "55.5"]);


