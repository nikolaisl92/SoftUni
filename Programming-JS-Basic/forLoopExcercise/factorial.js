function demo(input) {
    let num = Number (input[0]);
    let factorial = 1;
    

    for (let i = 1; i<=num; i++) {
        factorial*=i
        
    }
console.log(factorial)
}
demo(["4"])