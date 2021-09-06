function demo(input) {
    let num = Number(input[0]);

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= num; i++) {
        let current = Number(input[i]);
        if (current < min) {
            min = current;
        }

    }
    console.log(min)
}
demo(["2",
    "100",
    "99"])
