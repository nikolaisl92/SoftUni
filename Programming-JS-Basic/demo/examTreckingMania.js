function demo(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let ktwo = 0;
    let everest = 0;
    let all = 0;

    for (let i = 1; i <= groups; i++) {
        let current = Number(input[i]);
        if (current <= 5) {
            all += current;
            musala += current;
        } else if (current >= 6 && current <= 12) {
            all += current;
            monblan += current;
        } else if (current >= 13 && current <= 25) {
            all += current;
            kilimandjaro += current;
        } else if (current >= 26 && current <= 40) {
            all += current;
            ktwo += current;
        } else if (current >= 41) {
            all += current;
            everest += current;
        }
    }

    let musalaP = musala / all * 100;
    let monblanP = monblan / all * 100;
    let kilimandjaroP = kilimandjaro / all * 100;
    let ktwoP = ktwo / all * 100;
    let everestP = everest / all * 100;
    console.log(`${musalaP.toFixed(2)}%`);
    console.log(`${monblanP.toFixed(2)}%`);
    console.log(`${kilimandjaroP.toFixed(2)}%`);
    console.log(`${ktwoP.toFixed(2)}%`);
    console.log(`${everestP.toFixed(2)}%`);
}
demo(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
