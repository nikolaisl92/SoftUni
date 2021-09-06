function solve(n) {
    for (i = 1; i <= n; i++) {
        let line = '';
        for(let j = 1; j <= i; j++) {
            line += i + ' ';
        }
        console.log(line);
    }

}
solve(3);
solve(5);
solve(6);