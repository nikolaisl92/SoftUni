function solve(input) {
    let shirochina = Number(input[0]);
    let duljina = Number(input[1]);
    let visochina = Number(input[2]);
    let avgHigh = Number(input[3]);

    let obem = (shirochina * duljina * visochina);
    let obemStaq = (avgHigh + 0.40)*2 *2;
    let place =obem / obemStaq;
    
    if(place >= 3 && mqsto <= 10) {
        console.log(`The spacecraft holds ${Math.floor(place)} astronauts.`);
    } else if (place < 3) {
        console.log("The spacecraft is too small.");
    } else {
        console.log("The spacecraft is too big.");
    }

   

}
solve(["3.5",
"4",
"5",
"1.70"])
