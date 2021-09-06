function demo(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let buget = Number(input[2]);
    let all = 0;

    if (flowersType === "Roses") {
        all = flowersCount * 5;
        if (flowersCount > 80) {
            all = all * 0.9;
        }
    } else if (flowersType === "Dahlias") {
        all = flowersCount * 3.8;
        if (flowersCount > 90) {
            all = all * 0.85;
        }
    } else if (flowersType === "Tulips") {
        all = flowersCount * 2.8;
        if (flowersCount > 80) {
            all = all * 0.85;
        }
    } else if (flowersType === "Narcissus") {
        all = flowersCount * 3;
        if (flowersCount < 120) {
            all = all * 1.15;
        }
    } else if (flowersType === "Gladiolus") {
        all = flowersCount * 2.5;
        if (flowersCount < 80) {
            all = all * 1.20
        }
    }


    if (buget < all) {
        console.log(`Not enough money, you need ${(all - buget).toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(buget - all).toFixed(2)} leva left.`);
    }

}
demo(["Narcissus", "119", "360"]);