function demo(input) {

    let strawberryPrice = Number (input[0]);
    let bananaInKg = Number (input[1]);
    let orangesInKg = Number (input[2]);
    let raspberryInKg = Number (input[3]);
    let strawberryInKg = Number (input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananasPrice = raspberryPrice - (raspberryPrice * 0.8);

    let totalPriceForStrawberry = strawberryInKg * strawberryPrice;
    let totalPriceForBananas = bananaInKg * bananasPrice;
    let totalPriceForRaspberry = raspberryInKg * raspberryPrice;
    let totalPriceForOranges = orangesInKg * orangesPrice;

    let totalSum = totalPriceForStrawberry + totalPriceForBananas + totalPriceForRaspberry + totalPriceForOranges;

    console.log(totalSum);

}
demo(["48", "10", "3.3", "6.5", "1.7"]);