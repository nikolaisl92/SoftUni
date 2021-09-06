function demo(input) {
    let type = input[0];
    let r = Number (input[1]);
    let s = Number (input[2]);
    let price = 0;

    if (type === "Premiere") {
        price = r * s * 12;
    } else if (type === "Normal") {
        price = r * s * 7.5;
    } else if ( type === "Discount") {
        price = r * s * 5;
    }
    console.log(price.toFixed(2))

}
demo(["Premiere", "10", "12"])