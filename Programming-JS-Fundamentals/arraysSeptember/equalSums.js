function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isFound = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
        }
        if (i !== arr.length - 1) {
            for (let r = i + 1; r < arr.length; r++) {
               rightSum += arr[r];
                
            }
        }
        if(leftSum == rightSum) {
            isFound = true;
            console.log(i);
        }
    }
    if(!isFound) {
        console.log('no');
    }

}
solve([1, 2, 3, 3])