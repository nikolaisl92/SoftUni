function solve(input) {
    let team = input[0];
    let type = input[1];
    let count = Number(input[2]);
    let price =0;
    let isTrue = true;

    if (type === 'flags' && team === 'Argentina') {
        price = 3.25;
    } else if (type === 'flags' && team === 'Brazil') {
        price = 4.2;
    } else if (type === 'flags' && team === 'Croatia') {
        price = 2.75;
    } else if (type === 'flags' && team === 'Denmark') {
        price = 3.10;
    } else if (type === 'caps' && team === 'Argentina') {
        price = 7.20;
    } else if (type === 'caps' && team === 'Brazil') {
        price = 8.5;
    } else if (type === 'caps' && team === 'Croatia') {
        price = 6.90;
    } else if (type === 'caps' && team === 'Denmark') {
        price = 6.5;
    }  else if (type === 'posters' && team === 'Argentina') {
        price = 5.1;
    } else if (type === 'posters' && team === 'Brazil') {
        price = 5.35;
    } else if (type === 'posters' && team === 'Croatia') {
        price = 4.95;
    } else if (type === 'posters' && team === 'Denmark') {
        price = 4.8;
    }   else if (type === 'stickers' && team === 'Argentina') {
        price = 1.25;
    } else if (type === 'stickers' && team === 'Brazil') {
        price = 1.2;
    } else if (type === 'stickers' && team === 'Croatia') {
        price = 1.1;
    } else if (type === 'stickers' && team === 'Denmark') {
        price = 0.90;
    }
    if (type !== 'flags' && type !== 'caps' && type !== 'posters' && type !== 'stickers') {
        console.log("Invalid stock!");
        isTrue = false;
    } else if (team !== 'Argentina' && team !== 'Brazil' && team !== 'Croatia' && team !== 'Denmark') {
        console.log("Invalid country!");
        isTrue = false;
    } 
    if(isTrue) {
    console.log(`Pepi bought ${count} ${type} of ${team} for ${(count * price).toFixed(2)} lv.`);
    }   
}
solve(["USA",
"caps",
"18"])

