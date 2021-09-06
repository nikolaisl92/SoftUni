function solve(n, b) {
    let count = 0;
    while (n> 0) {
        let leftOver = n % 2;
        if (leftOver === b) {
            count++;
        }
        n = parseInt(n/2);
    }
    console.log(count);

}
solve(20, 0)