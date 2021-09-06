function solve(input) {
    let startingNumber = Number(input[0]);
    let endingNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let flag = false;
    let counter = 0;

    for (let i = startingNumber; i <= endingNumber; i++) {
        for (let z = startingNumber; z <= endingNumber; z++) {
            counter++;
            if(i + z === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicNumber})`);
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
    }
    if (!flag) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }

}
solve(["1",
"10",
"5"])