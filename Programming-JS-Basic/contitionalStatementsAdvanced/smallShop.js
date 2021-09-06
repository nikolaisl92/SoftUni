function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number (input[2]);
    let price = 0;

    switch(product){
        case "coffee" :
            switch (town){
                case "Sofia" : price = quantity * 0.50; break;
                case "Plovdiv" : price = quantity * 0.40; break;
                case "Varna" : price = quantity * 0.45; break;
            } break;
        case "water" :
            switch (town){
                case "Sofia" : price = quantity * 0.8; break;
                case "Plovdiv" : price = quantity * 0.7; break;
                case "Varna" : price = quantity * 0.7; break;
            }break;
        case "beer" :
            switch (town){
                case "Sofia" : price = quantity * 1.20; break;
                case "Plovdiv" : price = quantity * 1.15; break;
                case "Varna" : price = quantity * 1.10; break;
            }break;
        case "sweets" :
            switch (town){
                case "Sofia" : price = quantity * 1.45; break;
                case "Plovdiv" : price = quantity * 1.30; break;
                case "Varna" : price = quantity * 1.35; break;
            }break;
        case "peanuts" :
            switch (town){
                case "Sofia" : price = quantity * 1.60; break;
                case "Plovdiv" : price = quantity * 1.50; break;
                case "Varna" : price = quantity * 1.55; break;
            }break;
    }
    console.log(price);

}
smallShop(["coffee", "Varna", "2"])