function calc(input) {
    let month = input[0];
    let nightsToStay = Number(input[1]);
 
    let costOFStayApartment = 0;
    let costOfStayStudio = 0;
    //– May, June, July, August, September или October
    if (month === "May" || month === "October") {
        costOFStayApartment = 65 * nightsToStay;
        costOfStayStudio = 50 * nightsToStay;
        if (nightsToStay > 14) {
            costOfStayStudio *= 0.70;
            costOFStayApartment *= 0.90;
        } else if (nightsToStay > 7 && nightsToStay <= 14) {
            costOfStayStudio *= 0.95;
        }
 
    } else if (month === "June" || month === "September") {
        costOFStayApartment = 68.70 * nightsToStay;
        costOfStayStudio = 75.20 * nightsToStay;
        if (nightsToStay > 14) {
            costOfStayStudio *= 0.80;
            costOFStayApartment *= 0.90;
        }
 
    } else if (month === "July" || month === "August") {
        costOFStayApartment = 77 * nightsToStay;
        costOfStayStudio = 76 * nightsToStay;
        if (nightsToStay > 14) {
            costOFStayApartment *= 0.90;
        }
    }
 
    console.log(`Apartment: ${costOFStayApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${costOfStayStudio.toFixed(2)} lv.`)
 
 
}