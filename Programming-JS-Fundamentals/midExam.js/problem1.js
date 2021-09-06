function solve(input) {
    let food = Number(input.shift() * 1000);
    let quontity = Number(input.shift() * 1000);
    let cover = Number(input.shift() * 1000);
    let weight = Number(input.shift() * 1000);
    let isTrue = true;
    
    for (let i = 1; i <=30; i++) {
        food -= 300;
        if (i % 2 === 0) {
            let hay = food - (food * 0.95);
            quontity -= hay
        } 
        if (i % 3 === 0) {
            cover -= weight/3;
        }
        if (food <=0 || quontity <= 0 || cover <=0) {
            console.log(`Merry must go to the pet store!`);
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
    console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(quontity/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`)
    }
}
// solve((["10", 
// "5", 
// "5.2", 
// "1"])
// )
solve((["1", 
"1.5", 
"3", 
"1.5"
])
)