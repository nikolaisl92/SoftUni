function demo(input) {
    let day = Number(input[0]);
    let typeRoom = input[1];
    let grade = input[2];
    let result = 0;

    if (day - 1 < 10) {
        switch (typeRoom) {
            case "room for one person": result = (day - 1) * 18; break;
            case "apartment":
                result = (day - 1) * 25;
                result = result * 0.7;
                break;
            case "president apartment":
                result = (day - 1) * 35;
                result = result * 0.9;
                break;
        }
    } else if (day - 1 >= 10 && day - 1 <= 15) {
        switch (typeRoom) {
            case "room for one person": result = (day - 1) * 18; break;
            case "apartment":
                result = (day - 1) * 25;
                result = result * 0.65;
                break;
            case "president apartment":
                result = (day - 1) * 35;
                result = result * 0.85;
                break;
        }
    } else if (day - 1 > 15) {
        switch (typeRoom) {
            case "room for one person": result = (day - 1) * 18; break;
            case "apartment":
                result = (day - 1) * 25;
                result = result * 0.5;
                break;
            case "president apartment":
                result = (day - 1) * 35;
                result = result * 0.8;
                break;
        }
    } 
    if (grade === "positive") {
        result = result + (result*0.25);
    } else if (grade === "negative"){
        result = result * 0.9;
    } console.log(result.toFixed(2));
}

demo(["30",
"president apartment",
"negative"])
