function demo(input) {
    let bottles = Number(input[0]);
    let index = 1;
    let count = input[index];
    let cleanDish = 0;
    let cleanTen = 0;

    let preparat = bottles * 750;

    while (preparat <= dishes+dishesTwo+tendjeri) {
        count = input[index];
        let dishes = Number(input[index++]) * 5;
        cleanDish++;
        let dishesTwo = Number(input[index++]) * 5;
        let tendjeri = Number(input[index]) * 15;
        cleanTen;
        index++;
        if(count !== "End") {
           console.log(`"Detergent was enough!`);
        console.log(`${cleanDish} dishes and ${cleanTen} pots were washed.`);
        console.log(`Leftover detergent ${preparat - (dishes+dishesTwo+tendjeri)} ml.`)
            break;
        }
        
        console.log(`Not enough detergent, ${(dishes+dishesTwo+tendjeri)- preparat} ml. more necessary!`);
        
    } 
    

}
demo([2,
    53,
    65,
    55,
    End
    ])

