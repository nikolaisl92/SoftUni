function demo(input) {
    let freeDays = Number (input[0]);
    let minutesPlay = freeDays * 127;
    let jobDays = 365 - freeDays;
    let minutesPlay2 = jobDays * 63;
    let playMinutes = Math.abs(30000 - (minutesPlay2+minutesPlay));
    let hoursPlay = playMinutes % 60;
    let hoursPlay2 =Math.floor (playMinutes / 60);
    
    
    if (30000 > (minutesPlay2+minutesPlay)) {
        console.log(`Tom sleeps well`);
        console.log(`${hoursPlay2} hours and ${hoursPlay} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        console.log(`${hoursPlay2} hours and ${hoursPlay} minutes more for play`)
    }


}
demo(['113'])