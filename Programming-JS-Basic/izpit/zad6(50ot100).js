function solve(input) {
    let location = Number(input[0]);
    let index = 1;
    for (let i = 0; i < location; i++) {
        let current = Number(input[index]);
        // let kolichestvo = 0;
        let day1 = 0;
        let day2 = 0;
        let day3 = 0;
        let ochakvanee = 0;
        let dni = 0;
        while (true) {
            let ochakvane = Number(current);
            index++;
            ochakvanee += ochakvane;
            let days = Number(input[index]);
            index++;
            dni += days;
            let dobiv = Number(input[index]);
            index++;
            day1 += dobiv;
            if (days <= 1) {
                break;
            }
            let dobiv1 = Number(input[index]);
            index++;
            day2 += dobiv1;
            if (days <= 2) {
                break;
            }
            let dobiv2 = Number(input[index]);
            index++;
            day3 += dobiv2;
            break;
        }
        let avg = ((day1 + day2 + day3) / dni);
        if (avg >= ochakvanee) {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
        } else if (avg < ochakvanee) {
            console.log(`You need ${(ochakvanee - avg).toFixed(2)} gold.`);
        } 
    }
}
solve(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])

