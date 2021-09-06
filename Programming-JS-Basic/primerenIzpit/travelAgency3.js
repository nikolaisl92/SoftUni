function demo(input) {
    let city = input[0];
    let type = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let sum = 0;
    let isTrue = false;

    
    if(city === 'Bansko' || city === 'Borovets') {
        if(type === 'noEquipment' && vip === 'yes') {
            sum = 80 - (80*0.05);
        } else if(type === 'noEquipment' && vip === 'no') {
            sum = 80;
        } else if (type === 'withEquipment' && vip === 'yes') {
            sum = 100 - (100*0.1);
        } else if (type === 'withEquipment' && vip === 'no') {
            sum = 100;
        }

    } else if (city === 'Varna' || city === 'Burgas') {
        if(type === 'noBreakfast' && vip === 'yes') {
            sum = 100 - (100 * 0.07);
        } else if(type === 'noBreakfast' && vip === 'no') {
            sum = 100;
        } else if (type === 'withBreakfast' && vip === 'yes') {
            sum = 130 - (130*0.12);
        } else if (type === 'withBreakfast' && vip === 'no') {
            sum = 130;
        }
    } else {
        isTrue = true;
    }
    if(days >=7) {
        days -= 1;
    }
    console.log(`The price is ${(sum * days).toFixed(2)}lv! Have a nice time!`);
    if(isTrue){
        console.log(`Invalid input!`);
    }
}

demo(["Varna",
"withBreakfast",
"no",
"0"])
