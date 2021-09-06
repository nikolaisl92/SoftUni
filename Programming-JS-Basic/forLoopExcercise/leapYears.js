function demo(input) {
    let year1 = Number(input[0]);
    let year2 = Number (input[1]);

    for (let i = year1; i <= year2; i+=4) {
        console.log(i)
    }

}
demo(["1908", "1919"])
