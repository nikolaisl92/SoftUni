function demo(input) {

    let sqMeters = Number (input[0]);
    let priceForAll = sqMeters * 7.61;
    let discount = 0.18 * priceForAll;
    let result = priceForAll - discount;

    console.log(`The final price is: ${result} lv.`);
    console.log(`The discount is: ${discount} lv.`)


}
demo(["550"]);