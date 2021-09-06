function demo(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;

    while(sum < num) {
        let current = Number (input[index]);
        index++;
        sum += current;
    }
    console.log(sum)




}
demo(["100",
"10",
"20",
"30",
"40"])