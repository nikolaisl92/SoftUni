function demo(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let total = 0;

    for (i = 1; i <= days; i++) {
        let tax = 0;
        for(k = 1; k<= hours; k++) {
           if (i % 2 !== 0 && k % 2 === 0) {
               tax += 1.25;
               total += 1.25;
           } else if (i % 2 === 0 && k % 2 !== 0) {
               tax += 2.50;
               total += 2.5;
           } else {
               tax += 1;
               total +=1;
           }
        }
        console.log(`Day: ${i} - ${tax.toFixed(2)} leva`)
    }
    console.log(`Total: ${total.toFixed(2)} leva`)
}
demo(["2",
"5"])