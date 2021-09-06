function solve(input) {
    let e1 = Number(input[0]); 
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);
    let efficiency = e1 + e2 + e3;
    let people = Number(input[3]);
    let hours = 0;

    while (people > 0) {
        hours++;
        if(hours % 4 !== 0) {
            people -= efficiency;
        }

    }
console.log(`Time needed: ${hours}h.`);
}
solve(['5',
    '6',
    '4',
    '20'
    ])