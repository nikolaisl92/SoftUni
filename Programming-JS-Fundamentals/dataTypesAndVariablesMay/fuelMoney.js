function solve(distance, peope, price) {
    let consumation = 7 + peope * 0.1;
    let fuel = (distance / 100) * consumation;
    const total = fuel * price;
    console.log(`Needed money for that trip is ${total.toFixed(2)}lv.`)

}
solve(260, 9, 2.49)