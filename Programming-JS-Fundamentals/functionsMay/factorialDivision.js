function factorialDivision(n1, n2) {
    let factorialOne = 1;
    let factorialTwo = 1;
    for (let i = 1; i <= n1; i++) {
        factorialOne *= i;
    }
    for (let i = 1; i <= n2; i++) {
        factorialTwo *= i;
    }
    let result = factorialOne / factorialTwo;
    return result.toFixed(2)
}
console.log(factorialDivision(5, 2))