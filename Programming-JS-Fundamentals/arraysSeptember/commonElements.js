function solve(firstArr, secondArr) {
    for (const el of firstArr) {
        let isCommon = secondArr.includes(el);
        if (isCommon) {
            console.log(el);
        } 
    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)