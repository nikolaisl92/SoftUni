function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (i % 2 !== 0) {
            current = current * 2;
            result.push(current);
        }
    }
console.log(result.reverse().join(' '))
}
solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])