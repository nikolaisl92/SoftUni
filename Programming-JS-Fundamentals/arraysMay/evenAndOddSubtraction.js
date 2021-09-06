function solve(arr) {
    let resultEven = 0;
    let resultOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if(current % 2 === 0) {
            resultEven += current;
        } else if (current % 2 !== 0) {
            resultOdd += current;
        }
        
    }
    console.log(resultEven - resultOdd);

}
solve([1,2,3,4,5,6])