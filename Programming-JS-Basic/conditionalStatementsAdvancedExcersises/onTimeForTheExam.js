function demo(input) {
    const hour1 = Number(input[0]);
    const minet1 = Number(input[1]);
    const hour2 = Number(input[2]);
    const minet2 = Number(input[3]);
    const timeOfExam = (hour1 * 60) + minet1;
    const timeOfArrival = (hour2 * 60) + minet2;
    const difference = timeOfExam - timeOfArrival;
    const difference2 = timeOfArrival - timeOfExam;


    if (timeOfExam < timeOfArrival) {
        console.log("Late");
    } else if (timeOfExam - 30 <= timeOfArrival && timeOfExam >= timeOfArrival) {
        console.log("On time");
    } else if (timeOfExam - 30 > timeOfArrival) {
        console.log("Early");
    }

    if (difference <= 59 && difference > 0) {
        console.log(`${Math.abs(difference)} minutes before the start`);
    } else if (difference > 59 && difference > 0) {
        const minutes = difference % 60;
        const hour = Math.floor(difference / 60);
        if (minutes <= 9) {
            console.log(`${hour}:0${minutes} hours before the start`);
        } else {
            console.log(`${hour}:${minutes} hours before the start`);
        }
    } else if (difference2 <= 59) {
        console.log(`${Math.abs(difference2)} minutes after the start`)
    } else if (difference2 > 59) {
        const minutes = difference2 % 60;
        const hour = Math.floor(difference2 / 60);
        if (minutes <= 9) {
            console.log(`${hour}:0${minutes} hours after the start`);
        } else {
            console.log(`${hour}:${minutes} hours after the start`);
        }
    }

}
demo(["11",
"30",
"12",
"29"])

