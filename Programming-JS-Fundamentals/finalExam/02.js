function solve(input) {
    let n = Number(input.shift());
    let pattern = /!([A-Z][a-z]{1,})!:\[([A-Za-z]{7,})]/g;

    for (let i = 0; i< n; i++) {
        let current = input[i];
        let match = pattern.exec(current);
        if (match != null) {
            let codes = [];
            for (let n of match[2]) {
                let code = n.charCodeAt(0);
                codes.push(code);
            }
            console.log(`${match[1]}: ${codes.join(' ')}`)
        } else {
            console.log('The message is invalid')
        }
    }

}
solve(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])
