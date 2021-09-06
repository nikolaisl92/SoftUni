function demo(input) {
    let count = Number(input[0]);
    let orange = 0;
    let blue = 0;
    let green = 0;
    let red = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let maxKind = '';

    for (i = 1; i <= count; i++) {
        let sega = input[i]
        if (sega === "red") {
            red++;
            if (red > max) {
                max = red;
                maxKind = 'red';
            }
        } else if (sega === "blue") {
            blue++;
            if (blue > max) {
                max = blue;
                maxKind = 'blue';
            }
        } else if (sega === "green") {
            green++;
            if (green > max) {
                max = green;
                maxKind = 'green';
            }
        } else if (sega === "orange") {
            orange++;
            if (orange > max) {
                max = orange;
                maxKind = 'orange';
            }
        }
        
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max} -> ${maxKind}`)

}
demo(["4", "blue", "red", "blue", "orange"])