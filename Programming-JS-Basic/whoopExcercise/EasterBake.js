function demo(input) {
    let num = Number(input[0]);
    // let sugar = Number(input[1]);
    // let flour = Number(input[2]);
    
    let sugarTot = 0;
    let flourTot = 0;
    let maxFl = 0;
    let maxSh = 0;

    for (i = 1; i <= input.length - 1 ; i++) {
        let sugar = Number(input[i++]);
        let flour = Number(input[i]);
        sugarTot += sugar;
        flourTot += flour;
        if (sugar > maxSh) {
            maxSh = sugar;
        }
        if (flour > maxFl) {
            maxFl = flour
        }
    }
    let packetSugar = sugarTot / 950;
    let packetFlour = flourTot / 750;

    console.log(packetFlour)

    console.log(`Sugar: ${Math.ceil(packetSugar)}`);
    console.log(`Flour: ${Math.ceil(packetFlour)}`);
    console.log(`Max used flour is ${maxFl} grams, max used sugar is ${maxSh} grams.`);
}
demo(['4',
    '500',
    '350',
    '560',
    '430',
    '600',
    '345',
    '578',
    '543'
    ])