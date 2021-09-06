function solve(arr) {
    let newArr = [];
    let result = 0;
    let newResult = 0;
    for (let i = 0; i< arr.length; i++) {
        let current = arr[i];
        result += current;
        if (current % 2 === 0) {
            newArr.push(current + i);
        } else if ( current % 2 !== 0) {
            newArr.push(current - i);
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        let cur = newArr[j];
        newResult += cur;

    }
    console.log(newArr);
    console.log(result);
    console.log(newResult);

}
solve([5, 15, 23, 56, 35])