function demo(input) {
   
    let num = Number(input[0]);
    let count = 0;
    let sum = 0;

    for (i = 1; i <= num; i++) {
        count = Number(input[i]);
        sum += count;
    }
    console.log((sum/num).toFixed(2))

}
demo([4,
    3,
    2,
    4,
    2,
    ])