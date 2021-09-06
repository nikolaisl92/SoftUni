function demo(input) {
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];

    let fuelPrice = fuel * 2.1;
    let allWithGid = fuelPrice + 100;

    if(day === 'Sunday') {
        allWithGid = allWithGid *0.8;
    } else if ( day === 'Saturday') {
        allWithGid = allWithGid * 0.9;
    }

    if (budget > allWithGid){
        console.log(`Safari time! Money left: ${(budget- allWithGid).toFixed(2)} lv.`)
    } else {
        console.log(`Not enough money! Money needed: ${(allWithGid - budget).toFixed(2)} lv.`)
    }


}
demo(['1000', '10', 'Sunday'])