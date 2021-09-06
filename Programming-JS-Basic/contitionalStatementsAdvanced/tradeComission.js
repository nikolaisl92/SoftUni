function demo(input){
    let town = input[0];
    let comission = Number (input[1]);
    let result = 0;

    if (comission >= 0 && comission <=500){
        switch (town){
            case "Sofia" : result = comission * 0.05;break;
            case "Varna" : result = comission * 0.045;break;
            case "Plovdiv" : result = comission * 0.055;break;
            default : result = "error";break;
        }
    } else if (comission > 500 && comission<= 1000){
        switch(town){
            case "Sofia" : result = comission * 0.07;break;
            case "Varna" : result = comission * 0.075;break;
            case "Plovdiv" : result = comission * 0.08;break;
            default : result = "error";break;
        }
    } else if (comission > 1000 && comission <= 10000){
        switch(town){
            case "Sofia" : result = comission * 0.08;break;
            case "Varna" : result = comission * 0.10;break;
            case "Plovdiv" : result = comission * 0.12;break;
            default : result = "error";break;
        }
    } else if(comission > 10000){
        switch(town){
            case "Sofia" : result = comission * 0.12;break;
            case "Varna" : result = comission * 0.13;break;
            case "Plovdiv" : result = comission * 0.145;break;
            default : result = "error";break;
        }   
    } else {
        console.log("error")
    }
    console.log((result).toFixed(2))
}
demo(["PlovdivBourgas",
"1500"])