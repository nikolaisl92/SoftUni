function demo(input) {
    let destination = input[0];
    let time = input[1];
    let count = Number(input[2]);
    let price = 0;
    
    if (destination === "Germany") {
        if(time === "21-23") {
            price = 32;
        } else if ( time === "24-27") {
            price = 37;
        } else if (time === "28-31") {
            price = 43;
        }
    } else if(destination === "Italy") {
        if(time === "21-23") {
            price = 28;
        } else if ( time === "24-27") {
            price = 32;
        } else if (time === "28-31") {
            price = 39;
        }
    }else if(destination === "France") {
        if(time === "21-23") {
            price = 30;
        } else if ( time === "24-27") {
            price = 35;
        } else if (time === "28-31") {
            price = 40;
        }
    }
console.log(`Easter trip to ${destination} : ${(price * count).toFixed(2)} leva.`)
    
    
}
demo(["Germany",
"24-27",
"5"])
