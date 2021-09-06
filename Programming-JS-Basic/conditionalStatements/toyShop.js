function toyShop(input) {
    let vacancy = Number (input[0]);
    let countPuzzle = Number (input[1]);
    let countDolls = Number (input[2]);
    let bears = Number (input[3]);
    let minions = Number (input[4]);
    let trucks = Number (input[5]);

    let money = countPuzzle * 2.6 + countDolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let countOfToys = countPuzzle + countDolls + bears + minions + trucks;
    
    if (countOfToys >= 50) {
        money = money * 0.75;
    }

    money = money * 0.90;

    if (money >= vacancy) {
        console.log(`Yes! ${(money - vacancy).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(Math.abs(money - vacancy).toFixed(2))} lv needed.`)
    }
   



}
toyShop(['40.8', '20', '25', '30', '50', '10'])