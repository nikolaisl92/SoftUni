function demo(input) {
    let type = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);
    let weekends = 48;

    let weekendsSofia = weekends - h;
    let gamesSofia = weekendsSofia * (3/4);
    let gamesCity = h * 1;
    let gamesSaturday = p * (2/3);
    let allGames = gamesSofia + gamesCity + gamesSaturday;

    if (type === "leap") {
        allGames = allGames * 1.15;
    } else if (type === "normal") {
        allGames = allGames;
    }
    console.log(Math.floor(allGames))




}
demo(["leap",
"0",
"1"])

