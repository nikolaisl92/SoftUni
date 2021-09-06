function solve(input) {
    let location = Number(input[0]);
    let index = 1;

    for(let i = 1; i<= location; i++) {
        let ochakvane = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        let allDobiv = 0;
        for(let z = 1; z<= days; z++) {
           let currentDobiv = Number(input[index]);
            allDobiv += currentDobiv;
            index++;
        }
        let avg = (allDobiv / days);
        if (avg >= ochakvane) {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
        } else if (avg < ochakvane) {
            console.log(`You need ${(ochakvane - avg).toFixed(2)} gold.`);
        } 
    }

}
solve(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])
