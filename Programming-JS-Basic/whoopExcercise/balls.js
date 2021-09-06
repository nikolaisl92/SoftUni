function demo(input) {
    let num = input[0];
    let totalPoints = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let others = 0;


    for (let i = 1; i <= num - 1; i++) {
        let current = input[i];
        if (current === 'red') {
            totalPoints += 5;
            red++;
        } else if (current === 'orange') {
            totalPoints += 10;
            orange++;
        } else if (current === 'yellow') {
            totalPoints += 15;
            yellow++;
        } else if (current === 'white') {
            totalPoints += 20;
            white++;
        } else if (current === 'black') {
            totalPoints /= 2;
            black++;
        } else {
            others++;

        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Points from red balls: ${red}`);
    console.log(`Points from orange balls: ${orange}`);
    console.log(`Points from yellow balls: ${yellow}`);
    console.log(`Points from white balls: ${white}`);
    console.log(`Other colors picked: ${others}`);
    console.log(`Divides from black balls: ${black}`);

}
demo(['3',
    'white',
    'black',
    'pink',
])