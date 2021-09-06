function solve(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     let index = arr.indexOf(arr[i], i+1);
    //     if(index !== -1) {
    //         arr.splice(index, 1);
    //     }
    // }
    // return arr.join(' ');

    let outPutArr = [];
    for (const element of arr) {
        if(!outPutArr.includes(element)) {
            outPutArr.push(element)
        }
    }
    return outPutArr.join(' ')
}
console.log(solve([1, 2, 3, 4, 1]))