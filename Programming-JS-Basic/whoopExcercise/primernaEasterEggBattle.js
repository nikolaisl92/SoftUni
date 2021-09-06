function demo(input) {
    let playerOne = Number(input[0]);
    let playerTwo = Number(input[1]);
    let index = 2;
    let winner = input[index];

    while (winner !== "End of battle") {
        winner = input[index];
        index++;
        if (winner === "one") {
            playerTwo--;
        } else if (winner === "two") {
            playerOne--;
        }
        if (playerOne <= 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            break;
        } else if (playerTwo <= 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            break;
        }
        if (winner === "End of battle") {
            console.log(`Player one has ${playerOne} eggs left.`);
            console.log(`Player two has ${playerTwo} eggs left.`);
        }
    }
   
}
demo(["5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End of battle"
    ])