function demo(input) {
    let count = Number(input[0]);

    let two = 0;
    let three = 0;
    let four = 0;

    

    for (i=1; i <= count; i++) {
        let current = Number(input[i]);
        if (current % 2 === 0) {
            two++;
        }
        if (current % 3 === 0) {
            three++;
        }
        if (current % 4 === 0) {
            four++;
        }
    }
    
    let percentTwo = two / count * 100;
    let percentThree = three / count * 100;
    let percentFour = four / count * 100;
console.log(`${percentTwo.toFixed(2)}%`);
console.log(`${percentThree.toFixed(2)}%`);
console.log(`${percentFour.toFixed(2)}%`);


}
demo(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
