function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (!newArr.includes(current)) {
            newArr.push(current);
        }
    }
    return newArr.join(' ')
}
console.log(solve([1, 2, 3, 4]));