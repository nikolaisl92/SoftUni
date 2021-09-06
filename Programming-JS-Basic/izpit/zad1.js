function solve(input) {
    let videoCard = Number(input[0]);
    let prehodnik = Number(input[1]);
    let tok = Number(input[2]);
    let profit = Number(input[3]);

    let allCards = videoCard * 13;
    let allPrehodnici = prehodnik * 13;
    let poharcheno = allCards + allPrehodnici + 1000;
    let profitDay = profit - tok;
    let profitCard = 13 * profitDay;
    let vrushtane = poharcheno / profitCard;

    console.log(poharcheno);
    console.log(Math.ceil(vrushtane));

}
solve(["700",
"15",
"0.20",
"2"])
