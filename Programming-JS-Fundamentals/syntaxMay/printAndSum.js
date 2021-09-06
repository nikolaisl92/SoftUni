function solve(start, end) {
    let num = 0;
    let count = '';
    for(i = start; i <= end; i++) {
        let current = i;
        count += current + ' ';
        num += current;
        
    }
    console.log(count)
    console.log(`Sum: ${num}`)
}
solve(5, 10);
solve(0, 26);
solve(50, 60);