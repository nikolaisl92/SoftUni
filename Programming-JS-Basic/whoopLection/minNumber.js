function demo (input) {
    let index = 0;
    let command = input[index];
    index++;
    let min = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (num < min) {
            min = num;
        }
        command = input[index];
        index++;
        
        
    }
    console.log(min)
}
demo(["100",
"99",
"80",
"70",
"Stop"])
