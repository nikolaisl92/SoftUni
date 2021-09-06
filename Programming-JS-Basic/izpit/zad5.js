function solve(input) {
    let index = 0;
    let years = input[index];
    index++;
    let kids = 0;
    let adults = 0;

    while (years !== 'Christmas') {
        let current = Number(years);
        if(current <= 16) {
            kids++;
        } else if (current > 16) {
            adults++;
        }
        years = input[index];
        index++;
    }
    let moneyKids = kids *5;
    let moneyAdults = adults * 15;
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyKids}`);
    console.log(`Money for sweaters: ${moneyAdults}`);
}
solve(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])