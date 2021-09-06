function solve(firstArr, secondArr) {
    // for (const el of firstArr) {
    //     let isCommon = secondArr.includes(el);
    //     if (isCommon) {
    //         console.log(el);
    //     } 
    // }

    for (let i = 0; i < firstArr.length; i++) {
        if(secondArr.includes(firstArr[i])) {
           console.log(firstArr[i])
        }
    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)