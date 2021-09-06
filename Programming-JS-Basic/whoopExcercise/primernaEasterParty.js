function demo(input) {
    let guest = Number(input[0]);
    let priceOne = Number(input[1]);
    let buget = Number(input[2]);
    let cake = buget * 0.1;
    

    if (guest  >= 10 && guest <= 15) {
        priceOne = priceOne * 0.85;
    } else if ( guest > 15 && guest <= 20) {
        priceOne = priceOne * 0.8;
    } else if ( guest > 20 ) {
        priceOne = priceOne * 0.75;
    }

    let pari = priceOne * guest + cake;

    if (pari > buget) {
        console.log(`No party! ${(pari - buget).toFixed(2)} leva needed.`);
    } else {
        console.log(`It is party time! ${(buget - pari).toFixed(2)} leva left.`)
    }

    

}
demo([18,30,450])
