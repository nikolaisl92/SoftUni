function demo(input) {
    let srok = input[0];
    let typeDogovor = input[1];
    let internet = input[2];
    let mountsOfPay = Number(input[3]);
    let price = 0;

    if (srok === 'one' && typeDogovor === 'Small') {
        price = 9.98;
    } else if (srok === 'two' && typeDogovor === 'Small') {
        price = 8.58;
    } else if (srok === 'one' && typeDogovor === 'Middle') {
        price = 18.99;
    } else if (srok === 'two' && typeDogovor === 'Middle') {
        price = 17.09;
    }  else if (srok === 'one' && typeDogovor === 'Large') {
        price = 25.98;
    } else if (srok === 'two' && typeDogovor === 'Large') {
        price = 23.59;
    }  else if (srok === 'one' && typeDogovor === 'ExtraLarge') {
        price = 35.99;
    } else if (srok === 'two' && typeDogovor === 'ExtraLarge') {
        price = 31.79;
    }

    if (internet === 'yes' && price <= 10) {
        price += 5.50;
    } else if (internet === 'yes' && price > 10 && price <= 30) {
        price += 4.35;
    } else  if (internet === 'yes' && price > 30) {
        price += 3.85;
    } else {
        price = price;
    }
    
    if (srok === 'two') {
        price *= 0.9625;
    }
    let all = price * mountsOfPay;


console.log(`${all.toFixed(2)} lv.`)
}
demo(['two',
    'Large',
    'no',
    '10'
    ])