function demo(input) {
    let first = input[0];
    let second = input[1];
    let outPut = " ";

    // for (let i = first[0]; i <= second[0]; i++) {
    //     for (let o = first[1]; o <= second[1]; o++) {
    //         for (let p = first[2]; p <= second[2]; p++) {
    //             for (let k = first[3]; k <= second[3]; k++) {
    //                 if (i % 2 === 0 || o % 2 === 0 || p % 2 === 0 || k % 2 === 0) {
    //                     break;
    //                 } else {
    //                     outPut += `${i}${o}${p}${k} `;
    //                 }
    //             }
    //         }
    //     }
    // }
    // console.log(outPut)

    for (let i = Number(first); i <= Number(second); i++) {
        let current = `${i}`.split('');
        let isVallid = false;

            if (first[0] <= current[0] && second[0] >= current[0] && current[0] % 2 !==0) {
                if (first[1] <= current[1] && second[1] >= current[1] && current[1] % 2 !==0) {
                    if (first[2] <= current[2] && second[2] >= current[2] && current[2] % 2 !==0) {
                        if (first[3] <= current[3] && second[3] >= current[3] && current[3] % 2 !==0) {
                                isVallid = true;
                        }
                    }
                }
            }
        if (isVallid) {
            outPut += i + ' ';
        }
    }
console.log(outPut)
}
demo(['2345',
    '6789'
])