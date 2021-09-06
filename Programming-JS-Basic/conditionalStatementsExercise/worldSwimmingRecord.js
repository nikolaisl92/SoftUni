function worldSwimmingRecord(input) {
    let record = Number (input[0]);
    let distance = Number (input[1]);
    let time = Number (input[2]);

    let must = distance * time;
    let delay = Math.floor(distance / 15) * 12.5;
    let total = must + delay;
    
    if (total < record) {
        console.log(`Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(total - record).toFixed(2)} seconds slower.`);
    }


}
worldSwimmingRecord(["10464", "1500", "20"]);
