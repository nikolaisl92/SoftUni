function demo(input) {
    let km = Number(input[0]);
    let day = (input[1]);
    let taxTaxi = 0.70;
    let tariftaxiDay = 0.79;
    let tariftaxiNight = 0.90;
    let tarifBus = 0.09;
    let tarifTrain = 0.06;


    if (km <= 19 && day === 'day') {
        console.log((km * tariftaxiDay + taxTaxi).toFixed(2));
    } else if ( km <= 19 && day === 'night') {
        console.log((km * tariftaxiNight + taxTaxi).toFixed(2));
    } else if (km >= 20 && km<=99) {
        console.log((km * tarifBus).toFixed(2));
    } else if (km >= 100) {
        console.log((km * tarifTrain).toFixed(2));
    
    }

}
demo(['180', 'night'])