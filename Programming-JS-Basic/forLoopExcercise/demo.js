function demo(input) {
    let money = Number(input[0]);
    let yearToLive = Number(input[1]);
    let ageNow = 18;
    let yearBegin = 1800;
    let harch = 0;
    let moneyNow = 0;
    

    for (let i = yearBegin; i <= yearToLive; i++) {
        current = Number(input[i]);
        ageNow++;
        console.log(current)
        if (current % 2 === 0) {
            harch = 12000;
            moneyNow =money - harch;
            
        } else {
            harch = 12000 + 50 * ageNow;
            moneyNow =money - harch;
          
        }
    } 
    
}
demo([50000, 1802,]);