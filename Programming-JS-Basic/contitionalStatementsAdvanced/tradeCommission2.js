function demo(input) {
    let town = input[0];
    let comission = Number(input[1]);
    let result = 0;

    if (comission >= 0 && comission <= 500) {
        if (town === "Sofia") {
            console.log((result = comission * 0.05).toFixed(2));
        } else if (town === "Varna") {
            console.log((result = comission * 0.045).toFixed(2));
        } else if (town === "Plovdiv") {
            console.log((result = comission * 0.055).toFixed(2));
        } else {
            console.log("error")
        }
    } else if (comission > 500 && comission <= 1000) {
        if (town === "Sofia") {
            console.log((result = comission * 0.07).toFixed(2));
        } else if (town === "Varna") {
            console.log((result = comission * 0.075).toFixed(2));
        } else if (town === "Plovdiv") {
            console.log((result = comission * 0.08).toFixed(2));
        } else {
            console.log("error")
        }
    } else if (comission > 1000 && comission <= 10000) {
        if (town === "Sofia") {
            console.log((result = comission * 0.08).toFixed(2));
        } else if (town === "Varna") {
            console.log((result = comission * 0.10).toFixed(2));
        } else if (town === "Plovdiv") {
            console.log((result = comission * 0.12).toFixed(2));
        } else {
            console.log("error")
        }
    } else if (comission > 10000) {
        if (town === "Sofia") {
            console.log((result = comission * 0.12).toFixed(2));
        } else if (town === "Varna") {
            console.log((result = comission * 0.13).toFixed(2));
        } else if (town === "Plovdiv") {
            console.log((result = comission * 0.145).toFixed(2));
        } else {
            console.log("error")
        }
    } else {
        console.log("error")
    }

}
demo(["PlovdivBourgas",
"1500"])