function solve(string) {
    // for (let i = 0; i < string.length; i++) {
    //     let current = string[i];
    //     console.log(current)
    // }

    for (const char of string) {
        console.log(char)
    }

    let name = 'I am Nikolay Dimitrov';
    let sub = name.substring(5,10);
    console.log(sub)

}
solve('AWord')