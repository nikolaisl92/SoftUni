function demo(input) {
    // let n = Number(input[0]);
    // let num = 1;
    // for (let i = 0; i <= n; i +=2) {
    //     console.log(num);
    //     num = num * 2 * 2;
    // }

    let n = Number(input[0])

    for (let i = 0; i <= n; i +=2) {
        console.log(Math.pow(2,i))
    }
}
demo(["7"])