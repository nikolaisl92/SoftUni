function demo(input) {
    let customer = Number(input[0]);
    let index = 1;
    let item = input[index];

    for(let i = 0; i < customer; i++) {
        let current = input[i];
        let currentItemName = '';
        let currentPrice = 0;
        let number = 0;
        while(item !== 'Finish') {
            let currentItem = input[index];
            if(currentItem === 'basket'){
                currentPrice +=1.5;
                number++;
            } else if(currentItem === 'wreath') {
                currentPrice += 3.8;
                number++;
            } else if (currentItem === 'chocolate bunny') {
                currentPrice += 7;
                number++;
            }
            index++;
            item = input[index];
            
        }   
        console.log(`"You purchased ${number} items for ${currentPrice.toFixed(2)} leva.`)
    }
    let a = input[1];
    let b = a.charCodeAt(index);
    console.log(b)
}
demo(["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"])
