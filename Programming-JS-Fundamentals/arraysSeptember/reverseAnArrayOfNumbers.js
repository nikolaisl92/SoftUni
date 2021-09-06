function solve(n, arr) {
    let newArr = [];
    let result = '';
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    for (let b = newArr.length -1; b >= 0; b--) {
        result += newArr[b] + ' ';
    }
    console.log(result)


}
solve(3, [10, 20, 30, 40, 50])