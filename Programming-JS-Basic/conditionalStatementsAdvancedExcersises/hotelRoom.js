function demo(input) {
    let month = input[0];
    let count = Number(input[1]);
    let apartament = 0;
    let studio = 0;;

    switch (month) {
        case "May":
            apartament = 65;
            studio = 50;
            if (count > 7 && count < 14) {
                studio = studio * 0.95;
            } else if (count > 14) {
                studio = studio * 0.7;
                apartament = apartament * 0.9;
            }
            console.log(`Apartment: ${(count * apartament).toFixed(2)} lv.`)
            console.log(`Studio: ${(count * studio).toFixed(2)} lv.`); break;
        case "June":
            apartament = 68.70;
            studio = 75.20;
            if (count > 14) {
                studio = studio * 0.8;
                apartament = apartament * 0.9;
            }
            console.log(`Apartment: ${(count * apartament).toFixed(2)} lv.`)
            console.log(`Studio: ${(count * studio).toFixed(2)} lv.`); break;
        case "July":
            apartament = 67;
            studio = 76;
            if (count > 14) {
                apartament = apartament * 0.9;
            }
            console.log(`Apartment: ${(count * apartament).toFixed(2)} lv.`)
            console.log(`Studio: ${(count * studio).toFixed(2)} lv.`); break;
        case "August":
            apartament = 77;
            studio = 76;
            if (count > 14) {
                apartament = apartament * 0.9;
            }
            console.log(`Apartment: ${(count * apartament).toFixed(2)} lv.`)
            console.log(`Studio: ${(count * studio).toFixed(2)} lv.`); break;
        case "September":
            apartament = 68.70;
            studio = 75.20;
            if (count > 14) {
                studio = studio * 0.8;
                apartament = apartament * 0.9;
            }
            console.log(`Apartment: ${(count * apartament).toFixed(2)} lv.`)
            console.log(`Studio: ${(count * studio).toFixed(2)} lv.`); break;
        case "October":
            apartament = 65;
            studio = 50;
            if (count > 7 && count < 14) {
                studio = studio * 0.95;
            } else if (month > 14) {
                studio = studio * 0.7;
                apartament = apartament * 0.9;
            }
            console.log(`Apartment: ${(count * apartament).toFixed(2)} lv.`)
            console.log(`Studio: ${(count * studio).toFixed(2)} lv.`); break;

    }
}
demo(["June",
"14"])

