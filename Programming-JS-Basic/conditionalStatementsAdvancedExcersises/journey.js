function demo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination;
    let type;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            budget = budget * 0.3;
            type = "Camp";
        } else if (season === "winter") {
            budget = budget * 0.7;
            type = "Hotel";
        }

    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            budget = budget * 0.4;
            type = "Camp";
        } else if (season === "winter") {
            budget = budget * 0.8;
            type = "Hotel";
        }

    } else if (budget > 1000) {
        destination = "Europe"
        if (season === "summer") {
            budget = budget * 0.9;
            type = "Hotel";
        } else if (season === "winter") {
            budget = budget * 0.9;
            type = "Hotel";
        }

    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${(budget).toFixed(2)}`)
}
demo(["312", "summer"])