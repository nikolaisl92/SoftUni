function demo(input) {
    let countChicken = Number(input[0]);
    let countFish = Number(input[1]);
    let countVegan = Number(input[2]);

    let allChicken = countChicken * 10.35;
    let allFish = countFish * 12.40;
    let allVegan = countVegan * 8.15;

    let allPrice = allChicken + allFish + allVegan;
    let desert = allPrice * 0.2;
    let delivery = 2.50;
    let all = delivery + desert + allPrice;
    console.log(`Total: ${all.toFixed(2)}`)

}
demo(['2', '4', '3'])