function solve(input) {
    let days = Number(input[0]);
    let donations = 0;
    let counterWin = 0;
    let counterLose = 0;
    let index = 1;

    for (let i = 1; i <= days; i++) {
        let command = input[index++];
        let win = 0;
        let lose = 0;
        let dayDonation = 0;
        while (command !== "Finish") {  
            let rate = input[index++];
            switch (rate) {
                case "win": dayDonation += 20;
                    counterWin++;
                    win++;
                    break;
                case "lose":
                    counterLose++;
                    lose++;
                    break;
                case "Finish": break;
            }
            command = input[index++];
        }
        if (win > lose) {
            dayDonation *= 1.1;
            donations += dayDonation;
        } else {
            donations += dayDonation;
        }
    }
    if(counterWin > counterLose){
        donations *= 1.2;
        console.log(`You won the tournament! Total raised money: ${(donations).toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${(donations).toFixed(2)}`)
    }
    
}
solve(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);