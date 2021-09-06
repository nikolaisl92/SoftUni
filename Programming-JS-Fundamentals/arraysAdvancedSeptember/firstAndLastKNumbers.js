function solve(arr) {
    let k = arr.shift();

    let first = arr.slice(0, k);
    let second = arr.slice(- k);
    console.log(first.join(' '));
    console.log(second.join(' '));

}
solve([2, 
    7, 8, 9])