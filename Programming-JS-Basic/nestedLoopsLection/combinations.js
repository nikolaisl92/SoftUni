function solve(input) {
    let n = Number(input[0]);
    let validCombinationsCount = 0;
    let flag = false;

    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            for (let z = 0; z <= n; z++) {
                validCombinationsCount++;
                if (x + y + z === n) {
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            break;
        }
    }
    console.log(validCombinationsCount)
}
solve(["25"])